import mongoose from "mongoose"
import Recipe from "./models/Recipe.js"
import API_KEY from "../client/config.js";

async function fillTheDB(data){
  const name = data.recipe.label;
  const img = data.recipe.images.SMALL.url;
  const cal = data.recipe.calories;
  const type = data.recipe.mealType;
  const uri = data.recipe.uri;
  const createdAt = Date.now();
  const recipe = new Recipe({ name, img, cal, type, uri, createdAt })
  await recipe.save();
}

const url = `https://api.edamam.com/api/recipes/v2?type=public&q=carrot&app_id=88394fd1&app_key=${API_KEY}	`

  async function fetchRecipes(url) {
    try {

      const response = await fetch(url);
      const recipes = await response.json();
      for (const recipe of recipes.hits){
        await fillTheDB(recipe)
        console.log(recipe.recipe.label);
      }
      return recipes.hits;
    }
    catch (error) {
      console.error("error fetching data:", error);
    }
  }

  async function main(){
    await mongoose.connect('mongodb+srv://konkolygergo:Wq9d3YoieOgGUxx8@cluster0.tcfrltf.mongodb.net/')
    await fetchRecipes(url)
    await mongoose.disconnect()
    console.log("added recipes");
  }
  main()
  