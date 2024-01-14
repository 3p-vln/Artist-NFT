import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, {soutcemaps: true})
        .pipe(webpack({
            mode: 'development',
            output:{
                filename: 'app.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}