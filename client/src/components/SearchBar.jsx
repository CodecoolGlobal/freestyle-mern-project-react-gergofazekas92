import React, { useState } from 'react'
const url = 'https://api.edamam.com/api/recipes/v2'

function SearchBar({ items }) {
  const [input, setInput] = useState('')

  const fetchData = async (value) => {
    const response = await fetch(url)
    const data = await response.json()
    const filteredData = data.filter(x => {
      if (x.toLowerCase().includes(value)) {
        return x
      }
    })
    items(filteredData)
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div>
      <input placeholder='Type to search...' value={input} onChange={e => handleChange(e.target.value)}></input>
    </div>
  )
}

export default SearchBar
