const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = process.env.PORT|| 5000;
const app = express()
const router = require('./src/routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}))
app.use(express.static('public'))
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine','hbs')
app.use('/',router);
app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`)
})