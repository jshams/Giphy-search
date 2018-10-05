const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
var http = require('http');
var giphy = require("giphy-api")();
const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

// Jakc is a penis head

// app.get('/', function (req, res) {
//   console.log(req.query.term)
//   var queryString = req.query.term;
//
//   // ENCODE THE QUERY STRING TO REMOVE WHITE SPACES AND RESTRICTED CHARACTERS
//   var term = encodeURIComponent(queryString);
//   // PUT THE SEARCH TERM INTO THE GIPHY API SEARCH URL
//   var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
//
//   http.get(url, function(response) {
//     // SET ENCODING OF RESPONSE TO UTF8
//     response.setEncoding('utf8');
//
//     var body = '';
//
//     response.on('data', function(d) {
//       // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
//       body += d;
//     });
//
//     response.on('end', function() {
//       // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON
//       var parsed = JSON.parse(body);
//       // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
//       res.render('home', {gifs: parsed.data})
//     });
//   });
// })

app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.listen(3000, () => {
  console.log('app listening on port 3000! ')

})
