
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['app/js/script1.js', 'app/js/script2.js'],
        dest: 'dist/js/script.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/script.min.js': ['dist/js/script.js']
        }
      }
    },

    concat_css: {
      options: {},
      all: {
        src: ["app/css/*.css"],
        dest: "dist/css/styles.css"
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','concat_css','cssmin']);

};