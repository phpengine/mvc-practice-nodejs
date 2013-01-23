processView = function (PageVars) {

    var html = '' ;
    html += '    <h1>Other Page</h1>';
    html += '    <p>Here is a bunch of page content. Anything could have been put here, but the controller and view ';
    html += '    are pretty much here as placeholders. </p>';

    return html ;

}

exports.View = processView ;