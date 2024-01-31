import { useState } from 'react'
import RecipeList from './components/RecipeList'
import ListComments from './components/ListComments';

function App() {
  const [page, setPage] = useState("recipelist");
  const [recipeUrl, setRecipeUrl] = useState("")

  return (
    <>
      <ListComments/>
    </>
  )
}

export default App
