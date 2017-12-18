var express = require('express'),
    app = express();
var PORT = 8080;

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

// start the http connection
app.listen(PORT, function() {
    console.log('Express server started at PORT : ' + PORT);
});

app.get('*/*', function(req, res) {
    res.render('index.html');
});