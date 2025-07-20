// const { string } = require("joi");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//  const reviewSchema = new Schema({
//    comment:String,
//    rating:{
//     type:Number,
//     min:1,
//     max:1
//    },
//    createdAt:{
//     type:Date,
//     default:Date.now()
//    }
//  });
//  module.exports=mongoose.model("Review",reviewSchema);



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Review", reviewSchema);