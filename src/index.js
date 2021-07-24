const express = require('express')
const morgan = require('morgan')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars');
const path = require("path")
const app = express()
const port = 3000
const route = require("./routes/index")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.engine('hbs', exphbs({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


route(app)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})