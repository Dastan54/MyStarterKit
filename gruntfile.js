module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify : {
			my_target: {
				files: {
					'_/js/script.js' : ['_/components/js/script.js']
				} //files
			} //my_target
		}, //uglify
		
		compass:{
			dev: {
				options: {
					config : 'config.rb'
				} //options
			} //dev
		}, //compass

		watch: {
			options: { livereload: true },
			scripts: {
				files : ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //script
			
			html: {
				files : ['*.html'],
			}, //html

			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass

		} //watch
	}) //initConfig

	grunt.registerTask('default', 'watch');
} //exports