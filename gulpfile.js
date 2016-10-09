var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean-css');
var less = require('gulp-less');
var watch = require('gulp-watch');


var path = require('path');

gulp.task('less', function() {
   gulp.src('./css/*.less')
        .pipe(less({
            paths:[ path.join(__dirname,'less','includes') ]
        }))
        .pipe(gulp.dest('./dist'));
    gulp
        .src('./dist/hrstyle.css')
        .pipe(clean())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function(){
    gulp.watch('./css/*.less',function (event) {
        util.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('less');
    });

});


