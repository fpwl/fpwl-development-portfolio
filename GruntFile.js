// GruntFile.js
module.exports = function (grunt) {
    // initiliased the config
    grunt.initConfig({
        jshint: {
            files: ["*.js", "src/js/custom.js"],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ["src/css/style.css"]
            }
        },
        htmlmin: {                                     
            src: {                                    
                options: {                              
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                  
                    'src/minhtml/index.html': 'src/index.html',     
                }
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/css',
                    ext: '.min.css'   
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'src/js/custom.min.js': ['src/js/*.js'],
                }
            }
        },
        sass: {
            dist: {
                files: {
                    "src/css/style.css": "src/sass/style.scss",
                }
            }
        },
        prettysass: {
            options: {
                alphabetize: true
            },
            app: {
                src: ['src/sass/**/*.scss']
            },
        },
        watch: {
            sass: {
                files: ["src/sass/**/*.scss"],
                tasks: ["sass"]
            },
            js: {
                files: ["src/js/**/*.*"],
                tasks: ["jshint"]
            },
        }


    });
    //Run command tasks
    // running grunt jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // running grunt csslint
    grunt.loadNpmTasks('grunt-contrib-csslint');
    // run grunt mincss
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // run grunt uglifyy js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // run gruntSass
    grunt.loadNpmTasks('grunt-contrib-sass');
    // run grunt minhtml
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // run gruntwatch
    grunt.loadNpmTasks('grunt-contrib-watch');
    // run prettysass
    grunt.loadNpmTasks('grunt-prettysass');



    // In terminal if entered 'grunt debug', 
    // it will only run the tasks inside the array 
    grunt.registerTask("min", ["sass", "prettysass", "csslint", "cssmin", "jshint", "uglify", "htmlmin"]);
    grunt.registerTask("compileSass", ["sass"]);
    grunt.registerTask("w", ["watch"]);

};