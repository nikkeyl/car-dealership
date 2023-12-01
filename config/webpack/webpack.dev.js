import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import * as path from 'path';
import fs from 'fs';

const rootFolder = path.basename(path.resolve());
const buildFolder = 'build';
const srcFolder = 'src';

let pugPages = fs.readdirSync(srcFolder).filter(fileName => fileName.endsWith('.pug'));
let htmlPages = [];

if (!pugPages.length) {
    htmlPages = [new FileIncludeWebpackPlugin({
        source: srcFolder,
        htmlBeautifyOptions: {
            'indent-with-tabs': true,
            'indent_size': 4
        },
        replace: [
            { regex: '<link rel="stylesheet" href="css/style.min.css">', to: '' },
            { regex: 'NAME__PROJECT', to: rootFolder },
            { regex: '../content', to: 'content' },
            { regex: '@content', to: 'content' }
        ],
    })];
}

const paths = {
    build: path.resolve(buildFolder),
    src: path.resolve(srcFolder)
}

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: 'errors-warnings',
    optimization: {
        minimize: false
    },
    entry: [
        `${paths.src}/js/app.js`
    ],
    output: {
        filename: 'js/app.min.js',
        path: `${paths.build}`,
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        static: paths.build,
        host: 'local-ip',
        compress: true,
        port: 'auto',
        open: true,
        hot: true,

        watchFiles: [
            `${paths.src}/content/**/*.*`,
            `${paths.src}/**/*.html`,
            `${paths.src}/**/*.pug`,
            `${paths.src}/**/*.htm`,
        ],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: `${paths.src}/content/fonts`,
                use: [
                    'style-loader',
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '@content',
                            replace: '../content',
                            flags: 'g'
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules: false,
                            url: {
                                filter: (url, resourcePath) => {
                                    if (url.includes('content/') || url.includes('fonts/')) {
                                        return false;
                                    }
                                    return true;
                                },
                            },
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            }, {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader'
                    }, {
                        loader: 'string-replace-loader',
                        options: {
                            search: '@content',
                            replace: 'content',
                            flags: 'g'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        ...htmlPages,
        ...pugPages.map(pugPage => new HtmlWebpackPlugin({
            filename: `${pugPage.replace(/\.pug/, '.html')}`,
            template: `${srcFolder}/${pugPage}`,
            minify: false
        })),
        new CopyPlugin({
            patterns: [
                {
                    from: `${srcFolder}/json`, to: 'json',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${srcFolder}/content`, to: 'content',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${srcFolder}/files`, to: 'files',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${paths.src}/favicon.svg`, to: './',
                    noErrorOnMissing: true
                }
            ],
        }),
    ],
    resolve: {
        alias: {
            '@content': `${paths.src}/content`,
            '@scss': `${paths.src}/scss`,
            '@js': `${paths.src}/js`
        },
    },
}
export default config;