processView = function (PageVars, templateData) {

    var html = ''+"\n";
    html += '<!DOCTYPE html>'+"\n";
    html += '<html>'+"\n";
    html += '    <head>'+"\n";
    html += '        <title>A Node JS MVC Application</title>'+"\n";
    html += '        <link href="style.css" media="screen" rel="Stylesheet" type="text/css">'+"\n";
    html += '        <meta charset="utf-8" />'+"\n";
    html += '    </head>'+"\n";
    html += '    <body>'+"\n";
    html += '        <section id="pageWrap">'+"\n";
    html += '            <header>'+"\n";
    html += '                <h1 id="siteTitle">A Node JS MVC Application</h1>'+"\n";
    html += '                <div class="pageRow" />'+"\n";
    html += '                   <hr class="menuSeparator" />'+"\n";
    html += '                </div>'+"\n";
    html += '                <nav>'+"\n";
    html += '                    <ul id="menu">'+"\n";
    html += '                        <li>'+"\n";
    html += '                           <a href="/Index"><span>Home</span></a>'+"\n";
    html += '                        </li>'+"\n";
    html += '                        <li>'+"\n";
    html += '                           <a href="/Other"><span>Other</span></a>'+"\n";
    html += '                        </li>'+"\n";
    html += '                    </ul>'+"\n";
    html += '                </nav>'+"\n";
    html += '                <div class="pageRow" />'+"\n";
    html += '                   <hr class="menuSeparator" />'+"\n";
    html += '                </div>'+"\n";
    html += '            </header>'+"\n";
    html += '            <article>'+"\n";
    html += templateData;
    html += '            </article>'+"\n";
    html += '            <footer>'+"\n";
    html += '                <div class="pageRow" />'+"\n";
    html += '                   <hr class="menuSeparator" />'+"\n";
    html += '                </div>'+"\n";
    html += '                <h5 id="siteFooter">Written by David Amanshia of Golden Contact Computing</h5>'+"\n";
    html += '            </footer>'+"\n";
    html += '        </section>'+"\n";
    html += '    </body>'+"\n";
    html += '</html>'+"\n";

    return html;

}

exports.View = processView;