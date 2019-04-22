var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var HeadlineSchema = new Schema({

  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true,
  },
    link: {
    type: String,
    required: true
  },
  date: String,
  saved:{
    type: Boolean,
    required: false
  },
  
});

var Headline = mongoose.model("Headline", HeadlineSchema);

// Export the Headline model
module.exports = Headline;