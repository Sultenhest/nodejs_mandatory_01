const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const path       = __dirname + '/wwwroot/'

app.use(express.static('wwwroot'))

app.get('/', function (req, res) {
  res.sendFile( path + 'index.html' )
})

app.get('/about', function (req, res) {
  res.sendFile( path + 'about.html' )
})

app.get('/contact', function (req, res) {
  res.sendFile( path + 'contact.html' )
})

app.get('*', function(req, res){
  res.sendFile( path + '404.html' , 404 )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})