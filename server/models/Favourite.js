import mongoose from "mongoose";

const {Schema,model} = mongoose;

const favouritesSchema = new Schema ({
  name: String,
  img: String,
  cal: Number,
  type: Array,
  uri: String,
  createdAt: Date
})

export default model ("Favourite", favouritesSchema)