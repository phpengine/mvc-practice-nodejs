processController = function () {

    var returnable = new Array();

    returnable["ViewName"] = "Other";
    returnable["PageVars"] = "Stuff";
    returnable["MimeType"] = "text/html";

    return returnable;

}

exports.executeController = processController();