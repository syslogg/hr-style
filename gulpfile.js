var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean-css');
var less = require('gulp-less');
var watch = require('gulp-watch');


var path = require('path');

gulp.task('less', function() {
   gulp.src('./src/less/*.less')
        .pipe(less({
            paths:[ path.join(__dirname,'less','includes') ]
        }))
        .pipe(gulp.dest('./dist/css'));
    gulp
        .src('./dist/css/hrstyle.css')
        .pipe(clean())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js',function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watchless',function(){
    gulp.watch('./src/less/*.less',function (event) {
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('less');
    });

});

gulp.task('watchjs',function() {
    gulp.watch('./src/js/*.js',function(event){
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('js');
    })
});

gulp.task('default',function() {
    gulp.watch(['./src/js/*.js', './src/less/*.less'],function(event){
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('less');
        gulp.run('js');
    })
});


