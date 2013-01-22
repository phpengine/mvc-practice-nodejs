processController = function (assetPath) {
    var returnable = new Array();
    var fileExtension = assetPath.substr(assetPath.length-4 ) ;
    var fileSys = require("fs");

    if ( fileExtension ==".css" ) {
        var basePath = process.cwd()+'/src/Assets/CSS';
        returnable["MimeType"] = "text/css";}

    if ( fileExtension ==".jsx" ) {
        var basePath = process.cwd()+'/src/Assets/JS';
        returnable["MimeType"] = "text/javascript";}

    if ( fileExtension ==".png" ) {
        var basePath = process.cwd()+'/src/Assets/Images';
        returnable["MimeType"] = "image/png";}

    if ( fileExtension ==".jpg" ) {
        var basePath = process.cwd()+'/src/Assets/Images';
        returnable["MimeType"] = "image/jpeg";}

    var fullPath = basePath + assetPath ;
    returnable["PageVars"] = fileSys.readFileSync(fullPath);

    returnable["ViewName"] = "Asset";
    return returnable;

}

exports.executeController = processController;