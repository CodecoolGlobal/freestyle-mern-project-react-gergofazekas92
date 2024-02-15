import mongoose from "mongoose";

const { Schema, model } = mongoose

const UserRecipeSchema = new Schema ({
  name: String,
  ingridients: Array,
  description: String,
  created: Date
})

export default model('UserRecipe', UserRecipeSchema)