processController = function () {

    var returnable = new Array();

    returnable["ViewName"] = "Index";
    returnable["PageVars"] = "Stuff";
    returnable["MimeType"] = "text/html";

    return returnable;

}

exports.executeController = processController();