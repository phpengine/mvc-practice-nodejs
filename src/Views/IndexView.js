processView = function (PageVars) {

    var html = '';
    html += '    <h1>Home</h1>'+"\n";
    html += '    <p>This Application is written entirely in Javascript on the server side. It uses an MVC pattern '+"\n";
    html += ' that I wrote myself, including Controllers, Layouts, Views, a Front Controller, Routing/Friendly URL\'s '+"\n";
    html += ' and a Web Server capable of handling and Autoloading CSS, Jpg, PNG and Client Side JS Assets. </p>'+"\n";
    html += '    <br />'+"\n";
    html += '    <p>It\'s also using W3c Valid HTML 5.</p>'+"\n";
    html += '    <br />'+"\n";
    html += '    <p>The Application\'s Web Server will launch on port 8888 by default. This can be modified by '+"\n";
    html += ' modifying the \\Core\\WebServer.js Module.</p>'+"\n";
    html += '    <br />'+"\n";
    html += '    <p>Full Suite of Jasmine testing and Cucumber testing to follow soon.</p>'+"\n";

    return html ;

}

exports.View = processView ;