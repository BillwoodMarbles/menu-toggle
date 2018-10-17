module.exports = function (grunt) {
    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/styles.css': 'src/scss/styles.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};

