processView = function (PageVars) {

    var html = '' ;
    html += '    <h1>The other page</h1>';
    html += '    <p>Here is a bunch of page content.</p>';

    return html ;

}

exports.View = processView ;