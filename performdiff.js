function getdiff() {
    document.getElementById('status').content = 'Button pressed.'
    let originalText = document.getElementById('original').message
    let newText = document.getElementById('new').message

    let output = htmldiff(originalText, newText);

    document.getElementById('output').innerHTML = output
}