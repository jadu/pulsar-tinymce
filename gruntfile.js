// const Fiber = require('fibers');
const sass = require('dart-sass');

module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        browserify: {
            dev: {
                files: {
                    'dist/js/bundle.js': ['src/index.js']
                },
                options: {
                    browserifyOptions: {
                        standalone: 'pulsar',
                        debug: true
                    },
                    transform: [
                        ['babelify', { presets: ['es2015'] } ],
                        ['aliasify', { global: true }],
                        ['browserify-css', { global: true }],
                        ['brfs', { global: true }]
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', [
        'browserify:dev'
    ]);

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
}