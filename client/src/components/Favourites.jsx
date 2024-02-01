import React, { useEffect, useState } from 'react'

function Favourites() {
const [recipes,setRecipes] = useState()
const [editedName,setEditedName] = useState()


useEffect (() => {
const fetchRecipes = async () => {
  try {
    const response = await fetch ("api/favourites")
    const data = await response.json();
    console.log(data);
    setRecipes(data);
   } catch (error) {
      console.error("Error fetching recipes", error)
    } 
  }; fetchRecipes();
}, []);

// const handleUpdate = async (id) => {
//   try {
//     await fetch(`api/favourites/${id}`, {
//     method:"PUT",
//     headers: {"Content-Type": "application/json",},
//     body: JSON.stringify({ name: editedName }),
//   })
//   } catch (error) {
    
//   }

// }

const handleDelete = async (id) => {
  try {
     await fetch(`api/favourites/${id}`, {
      method:"DELETE",
    });
    const updatedRecipes = recipes.filter((recipe) => recipe._id !== id);
    setRecipes(updatedRecipes);

  } catch (error) {
    console.error("Error deleting favourite recipe",error)
  }
}


  return (
    <div>
      <h1>Favourites</h1>
    {recipes && recipes.map((recipe) => (
      <div key={recipe._id}>
      <h3 >{recipe.name}</h3>
      <img src={`${recipe.img}`}></img>
      <h3 >{Math.ceil(recipe.cal)}</h3>
      <h3 >{recipe.type}</h3>
      <button onClick={() => handleDelete(recipe._id)}>Delete</button>
      <button onClick={() => handleUpdate(recipe._id)}>Edit</button>
      </div>
    ))}
    </div>
  )

}

export default Favourites