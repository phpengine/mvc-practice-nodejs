processView = function (PageVars) {

    var html = '' ;
    html += '    <h2 class="articleTitle">Other Page</h2>';
    html += '    <p>Here is a bunch of page content. Anything could have been put here, but the controller and view ';
    html += '    are pretty much here as placeholders. </p>';

    return html ;

}

exports.View = processView ;