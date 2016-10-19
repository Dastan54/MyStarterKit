module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

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
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'assets/css',
					ext: '.min.css'
				}]
			}
		}, //cssmin
		watch: {
			options: { livereload: true },
			scripts: {
				files : ['assets/components/js/*.js'],
				tasks: ['uglify']
			}, //script
			
			html: {
				files : ['*.html'],
			},
			sass: {
				files: ['assets/components/sass/1-tools/*.scss'],
				files: ['assets/components/sass/2-basics/*.scss'],
				files: ['assets/components/sass/3-pages/*.scss'],
				tasks: ['compass:dev']
			}, //sass	
		} //watch
	}) //initConfig

	grunt.registerTask('default', 'watch');
} //exports