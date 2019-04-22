var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({

  _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
      },
  
  date: String,
noteText: String
 
});

var Note = mongoose.model("Headline", NoteSchema);

// Export the Headline model
module.exports = Note;