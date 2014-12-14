module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
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
    },
    watch: {
      options: {
        spawn: false, // grok this
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
    //  specs: {
    //    files: "code/specs/**/*.js",
    //    tasks: ["jasmine_node"]
    //  }
    },

    //jasmine_node: {
    //  options: {
    //    forceExit: true,
    //    match: '.',
    //    matchall: false,
    //    extensions: 'js',
    //    specNameMatcher: '[Ss]pecs',
    //    jUnit: {
    //      report: false
    //    }
    //  },
    //  all: ['code/specs/']
    //}

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true // grok this
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  //grunt.loadNpmTasks("grunt-jasmine-node");

  grunt.registerTask("default", ["concurrent", "watch"]);
};
