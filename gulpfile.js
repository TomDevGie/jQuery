'use strict';
 
 // fait appel aux dependances
let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let watch = require('gulp-watch');
let browserSync = require('browser-sync');
let uglify = require('gulp-uglify');
let pump = require('pump');
let cleanCSS = require('gulp-clean-css');

// premiere tache
// pour le dev 
gulp.task('sass', function () {
  return gulp.src('./app/scss/global.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

// concatJs
gulp.task('concatJs', function() {
  return gulp.src(['./app/javascript/jquery-3.2.1.min.js','./app/javascript/*.js'])
    .pipe(concat('production.js'))
    .pipe(gulp.dest('./app/js/'));
});

// tash d'ecoute pour les taches precedentes
gulp.task('watch', ['browserSync','sass','concatJs'], function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/javascript/**/*.js',['concatJs']);
	gulp.watch('app/css/global.css', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/javascript/**/*.js', browserSync.reload);
})


// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

// pour la prod =============================================

// generate minify js in dist folder
// https://www.npmjs.com/package/gulp-uglify
gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/production.js'),
        uglify(),
        gulp.dest('dist/js/')
    ],
    cb
  );
});

// using minify instead uglify
// gulp.task('compress', function() {
// 	gulp.src('src/js/production.js').pipe(minify({
// 		ext: {
// 			// optionnel, crée un fichier de debug dans Dist
// 			src: '-debug.js',
// 			min: '-min.js'
// 		},
// 		exclude: ['tasks'],
// 		ignoreFiles: ['.combo.js', '-min.js']
// 	})).pipe(gulp.dest('dist/js'))
// });

// using gullp-minifier instead of uglify
// gulp.task('copyJS', function() {
//     return gulp.src('src/js/production.js')
//     .pipe(minify({
//         minify: true,
//         collapseWhitespace: true,
//         conservativeCollapse: true,
//         minifyJS: true
//           }))
//     .pipe(gulp.dest('dist/js/'));
// });

// generate minify css in dist folder
// https://www.npmjs.com/package/gulp-clean-css
gulp.task('minify-css', () => {
  return gulp.src('app/css/global.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

// () => { }  equivaut a function() {}


// copy all .html in dist folder
// https://coderwall.com/p/9uzttg/simple-gulp-copy-file-task
gulp.task('copy', function(){
	gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('browserSyncProd', function(){
	browserSync({
		server: {
			baseDir: 'dist'
		}
	})
})

// generate full dist
gulp.task('build',['compress','minify-css','copy', 'browserSyncProd'], function() {});