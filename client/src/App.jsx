import { useState } from 'react'
import './App.css'
import DisplayRecipe from './components/recipePage/DisplayRecipe'
import RecipeList from './components/RecipeList'


function App() {
  const [page, setPage] = useState("recipelist");
  const [recipeUrl, setRecipeUrl] = useState("")

  return (
    <>
    <header>
      <div className='logo'>
        <div className='foodlogo'>Food</div>
        <div className='hublogo'>hub</div>
      </div>
    </header>
    {page === "recipelist" && <RecipeList onChangePage={setPage} onChooseRecipe={setRecipeUrl}/> }
    {page === "recipe" && <DisplayRecipe onData={recipeUrl} onChangePage={setPage}/> }
    {/* {page === "shop" && <Shop /> } */}
    </>
  )
}

export default App
