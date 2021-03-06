module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['app/js/*.js'],
      dest: 'dist/js/script.main.js',
    }
  },
  
    uglify: {
    my_target: {
      files: {
        'dist/js/script.min.js': ['dist/js/script.main.js'],
      }
    }
  },
  concat_css: {
    options: {
    },
    all: {
      src: ["app/css/*.css"],
      dest: "dist/css/style.css"
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
}
  
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  
  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','concat_css','cssmin']);

};