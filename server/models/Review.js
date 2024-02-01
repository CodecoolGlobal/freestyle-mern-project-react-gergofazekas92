import mongoose from "mongoose";

const { Schema, model } = mongoose

const reviewSchema = new Schema ({
  recipeName: String,
  name: String,
  comment: String,
  rating: Number,
  createdAt: Date,
})

export default model('Review', reviewSchema)