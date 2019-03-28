const { src , dest, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// Compile sass into CSS & auto-inject into browsers
function css() {
	return src("scss/*.scss")
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(concat('style.min.css'))
		.pipe(minifyCSS())
		.pipe(dest('./'))
		.pipe(browserSync.stream())
}

function watchSass() {
	return src("scss/*.scss")
		.pipe(watch("style.min.css", css))
}

function js() {
	return src('js/*.js', { sourcemaps: true })
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(dest('./', { sourcemaps: true }))
}

function watchJS() {
	return src("js/*.js")
		.pipe(watch("js/*.js", js))
}
exports.css = css;
exports.watchSass = watchSass;
exports.js = js;
exports.watchJS = watchJS;
exports.default = parallel(css, watchSass, js, watchJS);
