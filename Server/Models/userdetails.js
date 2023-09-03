const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    
    },
    country: {type:String},
  
    reminder: {type: Boolean},
    
    note: {type: String},

    visit: {type: Boolean},
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);