const {src, dest, watch} = require('gulp');
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
    watch( 'src/scss/app.scss', css )
}

exports.css = css;
exports.dev = dev;