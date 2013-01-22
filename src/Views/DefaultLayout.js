processView = function (PageVars, templateData) {

    var html = ''+"\n";
    html += '<!DOCTYPE html>'+"\n";
    html += '<html>'+"\n";
    html += '    <head>'+"\n";
    html += '        <title>A Node JS MVC Application</title>'+"\n";
    html += '        <link href="style.css" media="screen" rel="Stylesheet" type="text/css">'+"\n";
    html += '    </head>'+"\n";
    html += '    <body>'+"\n";
    html += '        <header>'+"\n";
    html += '            <h1>A Node JS MVC Application</h1>'+"\n";
    html += '            <nav>'+"\n";
    html += '                <ul id="menu">'+"\n";
    html += '                    <li>'+"\n";
    html += '                       <a href="/Index">Home</a>'+"\n";
    html += '                    </li>'+"\n";
    html += '                    <li>'+"\n";
    html += '                       <a href="/Other">Other</a>'+"\n";
    html += '                    </li>'+"\n";
    html += '                </ul>'+"\n";
    html += '            </nav>'+"\n";
    html += '        </header>'+"\n";
    html += '        <article>'+"\n";
    html += templateData;
    html += '        </article>'+"\n";
    html += '    </body>'+"\n";
    html += '</html>'+"\n";

    return html;

}

exports.View = processView;