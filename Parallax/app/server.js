var express = require('express'),
  http = require('http'),
  path = require('path'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

var app = express();

var port = process.env.PORT || 3000;
app.set('port', port);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../static')));

app.get('/me', function(req, res){
  res.send({
    app: 'Frontend template',
    version: '1.0.0'
  });
});

app.post('/data/ajax-content', function(req, res) {
  var postData = req.body,
      resData = null;
  console.log(postData);

  switch (postData.action) {
    case 'is_user_logged_in':
      resData = 'yes';
      break;
    case 'booking_result':
      resData = [
        {
          "id": "B00001",
          "pickupDate": "03/22/2017",
          "pickupTime": "13:00",
          "from": "123 Abc Street",
          "toFinalPlace": "345 Xyz Street",
          "vehicle": "Limo",
          "service": "Personal",
          "totalAmout": " $100",
          "bookingStatus": "New"
        },
        {
          "id": "B00002",
          "pickupDate": "03/22/2017",
          "pickupTime": "11:00",
          "from": "123 Abc Street",
          "toFinalPlace": "345 Xyz Street",
          "vehicle": "Limo",
          "service": "Personal",
          "totalAmout": " $200",
          "bookingStatus": "In progress"
        },
        {
          "id": "B00003",
          "pickupDate": "03/22/2017",
          "pickupTime": "13:00",
          "from": "123 Abc Street",
          "toFinalPlace": "345 Xyz Street",
          "vehicle": "Limo",
          "service": "Personal",
          "totalAmout": " $300",
          "bookingStatus": "Done"
        },
      ];
      break;
    default:
      break;
  }
  res.send(resData);
});

app.use(function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.send(JSON.stringify(req.body, null, 2));
});

http.createServer(app).listen(port);
console.log('Frontend template is running on port ' + port);
