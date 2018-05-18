module.exports = function (grunt) {
    "use strict";
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          sass: {
              prod: {
                  options: {
                      outputStyle: 'compressed'
                  },
                  files: {
                      './css/style.css': './sass/style.scss',
                  }
              },
              dev: {
                  options: {
                      outputStyle: 'expanded'
                  },
                  files: {
                      './css/style.css': './sass/style.scss',
                  }
              }
          },
          watch: {
              options: {
                  livereload: true,
              },
              css: {
                  files: ['./sass/**/*.scss'],
                  tasks: ['sass:dev'],
                  options: {
                      spawn: false
                  }
              },
              livereload: {
                  options: {
                      livereload:true
                  },
                  files:[
                      './css/*.css',
                  ]
              }
          }
      });
  
      // Load tasks...
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
  
      // Default task.
      grunt.registerTask('default', ['watch']);
  };