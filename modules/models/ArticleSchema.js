
  
// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var Article = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  date: String,

  url: String
});

// This creates our model from the above schema, using mongoose's model method
var ArticleSchema = mongoose.model("Article", Article);

// Export the Note model
module.exports = ArticleSchema;