var express = require('express'),
    bodyParser = require('body-parser');
var app = express();

var vingadores = [
  {nome: 'HULK', tel: 34324332},
  {nome: 'THOR', tel: 12345679},
  {nome: 'IRON MAN', tel: 987654321}
];

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('layout');
});

app.get('/avengers', function(req, res) {
  res.json({ avengers: vingadores });
});

app.post('/avenger', function(req, res) {
  vingadores.push(req.body);

  res.sendStatus(201);
});

app.listen(3000, function() {
  console.log('Express serving listening on port 3000');
});
