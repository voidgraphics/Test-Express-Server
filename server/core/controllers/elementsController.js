/* server-test
 * /core/controllers/elementsController.js - Elements controller
 */

"use strict";

exports.show = function( oRequest, oResponse ) {
    oResponse.send( oRequest.params.id );
};
