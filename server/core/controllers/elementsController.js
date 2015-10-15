/* server-test
 * /core/controllers/elementsController.js - Elements controller
 */

exports.show = function(  oRequest, oResponse ){
    oResponse.send( oRequest.params.id );
};
