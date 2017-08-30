var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var index = require('./routes/indexRoutes');
var characters = require('./routes/characterRoutes');
var scenarios = require('./routes/scenarioRoutes');
var races = require('./routes/raceRoutes');
var classes = require('./routes/classRoutes');
var alignments = require('./routes/alignmentRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/characters', characters);
app.use('/scenarios', scenarios);
app.use('/races', races);
app.use('/alignments', alignments);
app.use('/classes', classes);

app.listen(port, function() {
console.log("listening on port: ", port);
})
