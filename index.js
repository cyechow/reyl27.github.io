$('document').ready(function() {

    $('#btnsubmit').click(function(event) {
        event.preventDefault()

        document.getElementById('status').html = 'Button pressed.'
        let originalText = document.getElementById('original').value
        let newText = document.getElementById('new').value

        let output = htmldiff(originalText, newText);

        if (output.includes('<ins>') || output.includes('<del>'))
        {
            let cleanedOutput = output
            if (output.includes('xml')) {
                cleanedOutput = cleanXml(output)
            }
            document.getElementById('outputtext').value = cleanedOutput

            $('#output').html(cleanedOutput)
        }
        else{
            document.getElementById('output').innerHTML = "<p>No differences detected.</p>"
        }
    })

    $('#btnsave').click(function (event) { 
        let output = document.getElementById('output').innerHTML
        var file = new Blob([output], {type: "text/plain"});
        save.href = URL.createObjectURL(file);
        save.download = "diff.html";
     })

     $('#btnrun').click(function (event) {
         event.preventDefault()
         let original_dir = document.getElementById('original_path').value
         let new_dir = document.getElementById('new_path').value


         alert(original_dir)
         alert(new_dir)
     })

     function cleanXml (text) {
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

     function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
     }
});