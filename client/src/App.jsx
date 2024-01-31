import { useState } from 'react'
import './App.css'
import DisplayRecipe from './components/recipePage/DisplayRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DisplayRecipe/>
  )
}

export default App
