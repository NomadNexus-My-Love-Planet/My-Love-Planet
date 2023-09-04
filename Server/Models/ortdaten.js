const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ortdaten = new mongoose.Schema(
  {

    zipCode: {type:String},
    
    street: {type: String},

  },

  { timestamps: true }
  
);


module.exports = mongoose.model("Ort", ortdaten);