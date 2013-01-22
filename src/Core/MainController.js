processController = function (routeToProcess) {
    var Control = require('../Controllers/'+routeToProcess["controller"]+'.js') ;
    var ControlOutput = Control.executeController;
    if ( routeToProcess["controller"] == "Asset" ) {
        return ControlOutput(routeToProcess["assetPath"]); }
    return ControlOutput;
}

exports.doController = processController;