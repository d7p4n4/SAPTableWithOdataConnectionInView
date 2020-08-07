var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.get('/sevenwonders', function(req, res) {
    var items = [ {name: 'Giza', location: 'Egypt'},
                {name: 'Great Wall', location: 'China'},
                {name: 'Petra', location: 'Jordan'}];

    res.send(items);
});

app.listen(4000);