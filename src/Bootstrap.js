bootStrapMe = function (request) {

    var router = require("./Core/Router.js");
    var mainController = require("./Core/MainController.js")
    var mainView = require("./Core/MainView.js");

    var BootStrapOutput = new Object();
    var ControllerOutput =  mainController.doController(router.route(request));

    if (ControllerOutput["ViewName"] == "Asset") {
        BootStrapOutput.ViewOutput =  mainView.processAView(ControllerOutput, 'None'); }
    else {
        BootStrapOutput.ViewOutput =  mainView.processAView(ControllerOutput); }
    BootStrapOutput.MimeType = ControllerOutput["MimeType"];

    return BootStrapOutput;

}

exports.bootstrap = bootStrapMe;