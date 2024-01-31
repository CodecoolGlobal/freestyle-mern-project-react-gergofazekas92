import React, { useEffect, useState } from 'react'

function Favourites() {
const [recipes,setRecipes] = useState()

useEffect (() => {
const fetchRecipes = async () => {
  try {
    const response = await fetch ("api/favourites")
    const data = await response.json();
    setRecipes(data);
   } catch (error) {
      console.error("Error fetching recipes", error)
    } 
  }; fetchRecipes();
}, []);





  return (
    <div>
      <h1>Favourites</h1>
    {recipes && recipes.map((recipe, index) => (
      <h3 key={index}>{recipe.recipe.label}</h3>
    ))}
    </div>
  )

}

export default Favourites