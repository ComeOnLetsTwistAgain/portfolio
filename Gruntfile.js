'use strict';

module.exports = function (grunt) {
	var serveStatic = require('serve-static');

	grunt.initConfig({
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729,
				base: {
					path: './',
					options: {
						index: 'index.html'
					}
				}
			},
			livereload: {
				options: {
					open: true,
					middleware: function (connect) {
						return [
							serveStatic('./')
						];
					}
				}
			},
		},

		watch: {
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'./{,*/}*.html',
					'./{,*/}*.js',
					'./stylesheets/{,*/}*.css',
					'./img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			},
			lessWatch: {
				files: "./less/*.less",
				tasks: ["less"],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
		},



		less: {
			development: {
				options: {
					paths: ["./less/"],
				},
				files: {
					"./stylesheets/style.css": "./less/style.less"
				}
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');



	// register tasks
	grunt.registerTask('default', ['connect:livereload', 'watch']);

};
