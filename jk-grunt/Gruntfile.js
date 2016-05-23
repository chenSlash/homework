module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			static_mappings: {
				src: 'less-jkxy/less/index.less',
				dest: 'less-jkxy/bulid/all.css'
			}
			
		},
		cssmin: {
			static_mappings: {
				src: 'less-jkxy/bulid/all.css',
				dest: 'less-jkxy/bulid/all.min.css'
			}
		},
		watch: {
			files: ['less-jkxy/less/index.less'],
			tasks: ['less','cssmin']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['less','cssmin','watch']); 
}