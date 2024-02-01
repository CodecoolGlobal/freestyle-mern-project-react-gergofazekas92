import mongoose from "mongoose";

const {Schema,model} = mongoose;

const favouritesSchema = new Schema ({
  name: String,
  createdAt: Date
})

export default model ("Favourite", favouritesSchema)