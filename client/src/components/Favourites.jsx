import { useEffect, useState } from 'react'

function Favourites({ onChangePage, onChooseRecipe }) {
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("api/favourites")
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes", error)
      }
    }; fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`api/favourites/${id}`, {
        method: "DELETE",
      });
      const updatedRecipes = recipes.filter((recipe) => recipe._id !== id);
      setRecipes(updatedRecipes);
    } catch (error) {
      console.error("Error deleting favourite recipe", error)
    }
  }

  function handleChoose(uri) {
    console.log(uri);
    onChooseRecipe(uri);
    onChangePage("recipe");
  }

  return (
    <div className="main">
      <div className='recipelist'>
        {recipes && recipes.map((recipe) => (
          <table key={recipe._id}>
            <thead>
              <tr>
                <th >
                  <img src={`${recipe.img}`} onClick={() => handleChoose(recipe.uri)} ></img>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{`${recipe.name}`}</th>
              </tr>
              <tr>
                <td>{`${Math.ceil(recipe.cal)} kcal`}</td>
              </tr>
              <tr>
                <td>{`${recipe.type}`}</td>
              </tr>
              <button onClick={() => handleDelete(recipe._id)}>Delete</button>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

export default Favourites