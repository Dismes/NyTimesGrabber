var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/nytreact');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
  
// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  date: String,

  url: String
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Article", Article);

// Export the Note model
module.exports = Note;