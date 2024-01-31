import mongoose from "mongoose";

const {Schema,model} = mongoose;

const favouritesSchema = new Schema ({
  data: Schema.Types.Object,
  createdAt: Date
})

export default model ("Favourite", favouritesSchema)