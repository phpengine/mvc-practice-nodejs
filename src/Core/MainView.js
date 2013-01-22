processView = function (ControllerOutput, Layout) {
    if (Layout == undefined) {  Layout = 'Default'; }
    if ( Layout == "None" ) {
        var RenderedAll = loadTemplate(ControllerOutput['ViewName'], ControllerOutput['PageVars']); }
    else {
        var RenderedTemplate = loadTemplate(ControllerOutput['ViewName'], ControllerOutput['PageVars']);
        var RenderedAll = loadLayout(Layout, RenderedTemplate, ControllerOutput['PageVars']); }
    return RenderedAll ;
}

function loadLayout (layoutName, templateData, pageVars) {
    var LayoutModule = require('../Views/'+layoutName+'Layout.js') ;
    return LayoutModule.View(pageVars, templateData);
}

function loadTemplate (viewName, pageVars) {
    var TemplateModule = require('../Views/'+viewName+'View.js') ;
    return TemplateModule.View(pageVars);
}

exports.processAView = processView;