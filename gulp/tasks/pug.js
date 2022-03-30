import pug from 'gulp-pug';

export const buildPug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Ошибка в Pug",
                message: "Текст ошибки: <%= error.message %>",
            })
        ))
        .pipe(pug({
            pretty: true
        }))
        .pipe(app.gulp.dest(app.path.build.pug))
        .pipe(app.plugins.browsersync.stream());
}