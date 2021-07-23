const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
    res.send('helo')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})