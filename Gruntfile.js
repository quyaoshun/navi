module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/js/*.js'],
                dest: 'build/.<%= pkg.name %>.js'
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.registerTask('default', ['concat'])
}
