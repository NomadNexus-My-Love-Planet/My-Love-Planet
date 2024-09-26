const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nutzerSchema = new mongoose.Schema(
  {

    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},

  },
  { timestamps: true }
  
);

module.exports = mongoose.model("User", nutzerSchema);