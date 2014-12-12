module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      app: {
        src: ["server.js"]
      }
    //  browser: {
    //    options: {
    //      jshintrc: ".jshintrc-browser"
    //    },
    //    files: {
    //      src: ["code/public/app/**/*.js"]
    //    }
    //  }
    //},
    },

    watch: {
      options: {
        spawn: false,
      },
      app: {
        files: ["server.js"],
        tasks: ["jshint:app"]
      },
    //  browser: {
    //    files: "code/public/app/**/*.js",
    //    //tasks: ["jshint:browser"],
    //    options: {
    //      livereload: true
    //    }
    //  },
    //  css: {
    //    files: "code/public/stylesheets/*.css",
    //    options: {
    //      livereload: true
    //    }
    //  },
      views: {
        files: "views/**/*.ejs",
        options: {
          livereload: true
        }
      },
    //  specs: {
    //    files: "code/specs/**/*.js",
    //    tasks: ["jasmine_node"]
    //  }
    }

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
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  //grunt.loadNpmTasks("grunt-jasmine-node");

  grunt.registerTask("default", ["watch"]);
};
