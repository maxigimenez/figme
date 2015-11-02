'use strict';

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            dev: {
                files: ['./src/**/*.html'],
                tasks: []
            }
        },

        connect: {
            dev: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'src'
                }
            },
            production: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'dist'
                }
            }
        },

        vulcanize: {
            default: {
                options: {
                    inlineScripts: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src/static/images/',
                        src: ['*'],
                        dest: 'dist/static/images/'
                    }
                ]
            }
        },

        clean: {
            dist: ['dist/*']
        }

    });

    grunt.registerTask('default');

    grunt.registerTask('dev', [
        'connect:dev',
        'watch:dev'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'vulcanize'
    ]);

    grunt.registerTask('production', [
        'build',
        'connect:production',
        'watch:dev'
    ]);
};
