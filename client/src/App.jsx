import { useState } from 'react'
import RecipeList from './components/RecipeList'

function App() {
  const [page, setPage] = useState("recipelist");
  const [recipeUrl, setRecipeUrl] = useState("")

  return (
    <>
   
    {page === "recipelist" && <RecipeList onChangePage={setPage} onChooseRecipe={setRecipeUrl}/> }
    {/* {page === "recipe" && <Recipe /> }
    {page === "shop" && <Shop /> } */}
    </>
  )
}

export default App
