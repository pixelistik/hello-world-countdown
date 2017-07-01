'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/materialize-custom.css': 'css/materialize-custom.scss'
                }
            }
        }
    });


    grunt.registerTask('default', ['sass']);

};
