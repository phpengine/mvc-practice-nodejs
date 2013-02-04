processView = function (PageVars) {

    var html = '';
    html += '    <h2 class="articleTitle">Oops! Something Went Wrong!</h2>'+"\n";
    html += '    <p>Look\'s like there was a problem trying to do that.</p>'+"\n";
    html += '    <p>App Error: '+PageVars+'</p>'+"\n";

    return html ;

}

exports.View = processView ;