var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean-css');
var less = require('gulp-less');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();



var Path = {
    BaseDir: './',
    Dist: {
        CSS: './dist/css',
        JS: './dist/js'
    },
    Src:{
        LESS: './src/less/*.less',
        JS: './src/js/*.js',
        Modules: './src/less/modules/*.less'
    }
};

var path = require('path');

gulp.task('less', function() {
   gulp.src(Path.Src.LESS)
        .pipe(less({
            paths:[ path.join(__dirname,'less','includes') ]
        }))
        .pipe(clean())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(Path.Dist.CSS));
});

gulp.task('js',function() {
    gulp.src(Path.Src.JS)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(Path.Dist.JS));
        //.pipe(browserSync.reload({stream: true}));
});

gulp.task('default', [ 'js', 'less', 'browersync' ], function() {
    gulp.watch([Path.Src.LESS, Path.Src.Modules],function(event){
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('less');
    });
    gulp.watch([ Path.Src.JS ], function(event){
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('js');
    });
});

gulp.task('browersync',function() {
    browserSync.init([Path.Src.JS, Path.Src.LESS, Path.Src.Modules],{
        server: {baseDir: Path.BaseDir}
    });
    gulp.watch(Path.BaseDir + '**/*.*').on('change', browserSync.reload);
});
