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
        <div className='head'>
          <div className='logo' onClick={() => handleClick("recipelist")}>
            <div className='foodlogo'>Food</div>
            <div className='hublogo'>hub</div>
          </div>
          <div className='favourites'>
            <button  className='favouritesbtn' onClick={() => handleClick("favourites")}>❤️</button>
          </div>
        </div>
      </header>
      {page === "recipelist" && <RecipeList onChangePage={setPage} onChooseRecipe={setRecipeUrl} />}
      {page === "recipe" && <DisplayRecipe onData={recipeUrl} onChangePage={setPage} />}
      {page === "favourites" && <Favourites onChangePage={setPage} onChooseRecipe={setRecipeUrl} />}
    </>
  )
}

export default App
