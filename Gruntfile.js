'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/materialize-custom.css': 'css/materialize-custom.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/materialize-custom.min.css': 'css/materialize-custom.css'
                }
            },
            options: {
                sourceMap: true
            }
        }
    });
    grunt.registerTask('default', ['sass', 'cssmin']);
};
