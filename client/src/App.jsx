import { useState } from 'react'
import './App.css'
import DisplayRecipe from './components/recipePage/DisplayRecipe'
import RecipeList from './components/RecipeList'
import ListComments from './components/ListComments';
import Favourites from './components/Favourites';

function App() {
  const [page, setPage] = useState("recipelist");
  const [recipeUrl, setRecipeUrl] = useState("")

  return (
    <>
    <Favourites/>
    </>
  )
}

export default App
