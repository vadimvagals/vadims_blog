Gulp

/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/




var gulp = require('gulp'),
 webhelp = require('webhelp');

webhelp.sass('./assets/sass/style.scss', './assets/sass/**/*.scss', 'styles', false, './assets/css');
webhelp.copy('./bower_components/jquery/dist/jquery.min.js', './assets/js', 'copy_jq');

//
webhelp.copy('./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', './assets/js', 'copy_bootstrap_js');
webhelp.scripts('./scripts/app/**/*.js', 'app', 'concat_js', '', './assets/js');

gulp.task('default', function () {
    //webhelp.gulp.start('webhelp-default'); // run all regitered task
    webhelp.watch();
});