module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify : {
			my_target: {
				files: {
					'assets/js/script.js' : ['assets/components/js/script.js']
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
				files : ['assets/components/js/*.js'],
				tasks: ['uglify']
			}, //script
			
			html: {
				files : ['*.html'],
			}, //html

			sass: {
				files: ['assets/components/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass

		} //watch
	}) //initConfig

	grunt.registerTask('default', 'watch');
} //exports