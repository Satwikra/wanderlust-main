const express=  require("express");
const router =express.Router({mergeParams:true});
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError =require("../utils/ExpressError.js");
const {reviewSchema} =require("../schema.js");
const  Review= require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview =(req,res,next) =>{
    let {error}= reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).joi(",");
        throw new ExpressError(400,error);
    }else{
        next();
    }
};

//Reviews
//Post Review Route
router.post("/", validateReview,wrapAsync(async (req, res) => {
  console.log(req.params.id);
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  const newReview = new Review(req.body.review);
  await newReview.save();

  listing.reviews.push(newReview._id);
  await listing.save();
  req.flash("success","New Review Created!");
  res.redirect(`/listings/${listing._id}`);
}));

//Delete review route
router.delete("/:reviewId",wrapAsync(async(req,res) =>{
  let {id,reviewId}= req.params;

  await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewId}});
   await Review.findByIdAndDelete(reviewId);
    req.flash("success","New Review Deleted!");
   res.redirect(`/listings/${id}`);
})
);
module.exports=router;
