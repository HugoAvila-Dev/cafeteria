const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const css = ( done ) => {
    //compilar sass 
    //passos: 1 - identificar archivos, 2 - compilarla, 3 - guardar el .css

    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( postcss( [ autoprefixer() ] ))
        .pipe( dest('build/css') )

        done();
}

const dev = () => {
    watch( 'src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
exports.default = series( css, dev );

// series - Se inicia una tarea, y hasta que finaliza, inicia la siguiente
// parallel - Todas inician al mismo tiempo