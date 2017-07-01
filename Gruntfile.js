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
                    'css/combined.css': ['css/materialize-custom.css', 'css/main.css']
                }
            },
            options: {
                sourceMap: true
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                },
                files: [{
                    expand: true,
                    src: ['css/combined.css'],
                    ext: '.css.gz'
                },
                {
                    expand: true,
                    src: ['js/bundle.js'],
                    ext: '.js.gz'
                }]
            }
        }
    });
    grunt.registerTask('default', ['sass', 'cssmin', 'compress']);
};
