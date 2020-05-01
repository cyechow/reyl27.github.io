const htmldiff = require('./htmldiff')

runDiffTool = function (originalText, newText) {
        let output = htmldiff(originalText, newText);

        if (output.includes('<ins>') || output.includes('<del>'))
        {
            let cleanedOutput = output
            if (output.includes('xml')) {
                cleanedOutput = cleanXml(output)
            }
            return cleanedOutput
        }
        else{
            return "No differences detected."
        }
}

cleanXml = function (text) {
    text = replaceAll(text, 'styleclass="[a-zA-Z0-9]*"[ ]*','')
    text = replaceAll(text, '<header>', '<h1>')
    text = replaceAll(text, '</header>', '</h1>')
    text = replaceAll(text, '<para >','<p>')
    text = replaceAll(text, '<\/para>','</p>')
    text = replaceAll(text, '<li >','<li>')
    text = replaceAll(text, '<list.*>\n','')
    text = replaceAll(text, '<\/list>','')
    text = replaceAll(text, '<link.*href=','<a href=')
    text = replaceAll(text, '<\/link>','</a>')
    text = replaceAll(text, '  <title.*>.*<\/title>\n','')
    text = replaceAll(text, '  <body>\n',' ')
    text = replaceAll(text, '  <\/body>.*\n','')
    text = replaceAll(text, '\\<\\?xml.*\\?\\>\n','')
    text = replaceAll(text, '<topic.*>\n','')
    text = replaceAll(text, '<\/topic>.*\n','')
    text = replaceAll(text, '</li><del>\n_*</del>', '</li><del>•</del>')
    return text
}

replaceAll = function (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

module.exports = {
    runDiffTool,
    cleanXml,
    replaceAll
}