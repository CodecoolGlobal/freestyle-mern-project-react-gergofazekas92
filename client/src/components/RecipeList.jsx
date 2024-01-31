import { useEffect, useState } from "react";


function RecipeList({ onChangePage, onChooseRecipe }) {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [errorMes, setErrorMes] = useState("");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=88394fd1&app_key=83cac76653be41a30be1b45298824ffd	`

  async function fetchRecipes(url) {
    try {
      const response = await fetch(url);
      const recipes = await response.json();
      return recipes.hits;
    }
    catch (error) {
      console.error("error fetching data:", error);
    }
  }

  async function handleSearchClick(){
    const fetchedRecipes = await fetchRecipes(url);
    setRecipes(fetchedRecipes);

    if (fetchedRecipes.length === 0) {
      setErrorMes("No recipes found for the given search.");
    } else {
      setErrorMes("");
    }
  }

  useEffect(() => {
    async function task() { 
      setRecipes(await fetchRecipes(url));
    }
    task()
  }, []);

  function handleChoose(){

    onChangePage("recipe");
  }

  function handleClick (data) {
    console.log(data)
  }

  return (
    <>
    <div>
      <nav>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSearchClick}>🔎</button>
      </nav>
    </div>
    
    <div className="recipelist">
    {errorMes && <p>{errorMes}</p>}
      {recipes &&
        recipes.map((recipe, index) => (
          <table key={index}>
            <thead>
              <tr>
              <th >
                <img src={`${recipe.recipe.images.SMALL.url}`} onClick={handleChoose}></img>
              </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{`${recipe.recipe.label}`}</th>
              </tr>
              <tr>
                <td>{`${Math.ceil(recipe.recipe.calories)} kcal`}</td>
                <td>{`${recipe.recipe.mealType}`}</td>
              </tr>
              <button onClick={()=>handleClick(recipe)} >Add to favourites</button>
            </tbody>
          </table>
        ))}
    </div>
    </>
  )
}

export default RecipeList;

