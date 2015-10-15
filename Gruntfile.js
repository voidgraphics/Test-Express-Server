/* Gruntfile - tasks for grunt */

"use strict";


module.exports = function( grunt ) {

    // 1. On charge les tâches
    grunt.loadNpmTasks( "grunt-eslint" );

    // 2. On configure les tâches
    grunt.initConfig( {
        "eslint": {
            "target": [ "./server/**/*.js" ]
        }
    } );

    // 3. On crée des aliases (si on veut)
    grunt.registerTask( "default", [ "eslint" ] );

};
