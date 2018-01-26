
'use strict';

const db = require('./models');

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/nytreact');
// Save a reference to the Schema constructor

db.mongoose = mongoose;

module.exports = db;