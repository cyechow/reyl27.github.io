const difftool = require('./difftool')

const getDiff = (req, res) => {
    const jsonReq = req.body
    if (!jsonReq.hasOwnProperty('original'))
    {
        jsonReq = req.query
    }

    if (jsonReq.hasOwnProperty('original'))
    {
        let originalText = jsonReq.original
        let newText = jsonReq.new
        let output = difftool.runDiffTool(originalText, newText)

        res.status(201).send(output)
    }
    else {
        res.status(500).send('Invalid data received.')
    }
}

module.exports = {
    getDiff
}