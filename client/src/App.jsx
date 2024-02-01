import { useState } from 'react'
import './App.css'
import DisplayRecipe from './components/recipePage/DisplayRecipe'
import RecipeList from './components/RecipeList'
import "./DisplayRecipe.css"
import Favourites from './components/Favourites';

function App() {
  const [page, setPage] = useState("recipelist");
  const [recipeUrl, setRecipeUrl] = useState("")

  function handleClick(data) {
    setPage(data)
  }

  return (
    <>
      <header>
        <div className='logo'>
          <div className='foodlogo'>Food</div>
          <div className='hublogo'>hub</div>
          <button onClick={()=> handleClick("favourites")}>❤️</button>
          <button onClick={() => handleClick("recipelist")}>Home</button>
        </div>
      </header>
      {page === "recipelist" && <RecipeList onChangePage={setPage} onChooseRecipe={setRecipeUrl} />}
      {page === "recipe" && <DisplayRecipe onData={recipeUrl} onChangePage={setPage} />}
      {page === "favourites" && <Favourites  onChangePage={setPage} onChooseRecipe={setRecipeUrl} />}
    </>
  )
}

export default App
