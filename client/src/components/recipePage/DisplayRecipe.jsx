import { useEffect, useState } from "react";

const apiURL = (uri) => `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=fd860c45&app_key=46f27aa35f7aacbf26c460a403b045e6`

function DisplayRecipe({ onData }) {
    // let IDEIGLENES = 'http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_4bb99424e1bbc40d3cd1d891883d6745'
    let IDEIGLENES = encodeURIComponent('http://www.edamam.com/ontologies/edamam.owl#recipe_1480e8a6ac9e26b7da91f808f63f8176')
    const [data, setData] = useState([])

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const reaponse = await fetch(apiURL(IDEIGLENES))
                const responseData = await reaponse.json()
                setData(responseData.hits)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
        // console.log(data)
    }, [])
    console.log(data)

    return (
        <>{data && data.map((recipe, index) => (
            <div key={index} className="container">
                <div className="container-head">
                    <div className="container-head-picture">
                        <img src={recipe.recipe.images.REGULAR.url}></img>
                    </div>
                    <div className="conatiner-head-info">
                        <h1>{recipe.recipe.label}</h1>
                        <ul>Ingredients</ul>
                        {recipe.recipe.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </div>
                </div>
                <div className="container-body">
                    <div className="badge">
                        {recipe.recipe.dietLabels.map((label, index) => (
                            <p key={index}>{label}</p>
                        ))}
                    </div>
                    <div className="nutritions">
                    </div>
                    <div>
                        <button onClick={() => window.location.href = recipe.recipe.url} >Check the full recipe</button>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}


export default DisplayRecipe;