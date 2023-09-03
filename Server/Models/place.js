// // Das Mongoose-Schema definiert die Struktur
// // eines Orts in der Datenbank. Hier werden Titel,
// // Koordinaten, Details, Bilder, Benutzer-ID und andere Felder festgelegt.

// 

// const ortSchema = new mongoose.Schema(
//   {
//     city: {
//       type: String,
//     },
//     postType: {
//       type: String,
//     },
//     title: {
//       type: String,
//     },
//     category: {
//       type: String,
//     },
//     price: {
//       type: String,
//     },
//     content: {
//       type: String,
//     },
//     image: {
//       type: String,
//     },
//     Address: {
//       type: String,
//     },
//     zipCode: {
//       type: String,
//     },
//     cloudinary_id: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ortSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Places", ortSchema);

