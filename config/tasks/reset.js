export const reset = () => {
    return app.plugins.deleteAsync(app.path.buildFolder);
}