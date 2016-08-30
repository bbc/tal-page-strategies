/*global module:false*/
/*eslint camelcase: 0*/
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({        
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
                commitFiles: ['package.json'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
           }
       }
    });

    grunt.loadNpmTasks('grunt-bump');
};
