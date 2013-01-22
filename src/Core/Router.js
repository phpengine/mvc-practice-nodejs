var url = require("url");

getRoute = function (requestObject) {
    var route=new Array();
    var fullPathName = url.parse(requestObject.url).pathname;
    if ( checkIfPathIsAsset(fullPathName) ) {
        route["controller"]="Asset";
        route["assetPath"]=fullPathName; }
    else if (fullPathName=="/Index" || fullPathName=="/") {
        route["controller"]="Index"; }
    else if (fullPathName==( "/Other" || "/More" ) ) {
        route["controller"] = fullPathName.substr(1) ; }
    else {
        route["controller"] = "Error" ; }
    return route;
}

function checkIfPathIsAsset(fullPathName){
        var extension = fullPathName.substr(fullPathName.length-4 ) ;
    if (extension == (".css" || ".jpg" || ".png") ) {
        return true; }
    return false;
}

exports.route = getRoute;