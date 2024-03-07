import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'PostSeller' },
    userEmail: {type:String, required:true},
    companyName: {type:String, required:true},
    address: {type:String, required:true},
    numbers: {type:Number, required:true},
    picture: {type:String, required:true}
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
export default Review;
