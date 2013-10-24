module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        sass:{
            dist: {
                options:{
                    style: 'expanded'
                },
                files:{
                'style.css': 'style.scss',
                 }
             }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['sass']);

}
