/* server-test
 * /routes/main.js - declare main express routes
 */

"use strict";

var pagesController = require( "../core/controllers/pagesController" );
var elementsController = require( "../core/controllers/elementsController" );

exports.init = function( oServerInstance ) {
    oServerInstance.get( "/", pagesController.index );
    oServerInstance.get( "/elements/:id", elementsController.show );
};
