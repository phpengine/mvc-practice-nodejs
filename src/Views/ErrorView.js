processView = function (PageVars) {

    var html = '';
    html += '    <p>Oops! Something Went Wrong!</p>'+"\n";
    html += '    <p>Error'+PageVars+'</p>'+"\n";

    return html ;

}

exports.View = processView ;