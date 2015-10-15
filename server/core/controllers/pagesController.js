/* server-test
 * /core/controllers/pagesController.js - Pages controller
 */

"use strict";

exports.index = function( oRequest, oResponse ) {
    oResponse.render( "page.jade", {
        "page_title": "Hello, internet visitors!",
        "img_src": "lol.jpg"
    } );
};
