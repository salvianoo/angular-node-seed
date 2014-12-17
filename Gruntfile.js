module.exports = function(grunt){

  grunt.initConfig({});

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");

  grunt.config('jshint', {
    app: {
      options: {
        jshintrc: ".jshintrc"
      },
      src: ["server.js", "routes/**/*.js"]
    },
    browser: {
      options: {
        jshintrc: ".jshintrc-browser"
      },
      files: {
        src: ["public/javascripts/**/*.js"]
      }
    }
  });

  grunt.config('watch', {
    options: {
      spawn: false
    },
    app: {
      files: ["server.js", "routes/**/*.js"],
      tasks: ["jshint:app"]
    },
    browser: {
      files: "public/javascripts/**/*.js",
      tasks: ["jshint:browser"],
      options: {
        livereload: true
      }
    },
    css: {
      files: "public/stylesheets/**/*.css",
      options: {
       livereload: true
      }
    },
    views: {
      files: "views/**/*.html",
      options: {
        livereload: true
      }
    }
  });

  grunt.config('nodemon', {
    dev: {
      script: 'server.js'
    }
  });

  grunt.config('concurrent', {
    tasks: ['nodemon', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  });

  grunt.registerTask("default", ["concurrent", "watch"]);
};
