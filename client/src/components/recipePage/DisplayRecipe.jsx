import { useEffect, useState } from "react";

const apiURL = (uri) => `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=fd860c45&app_key=46f27aa35f7aacbf26c460a403b045e6`

function DisplayRecipe({ onData, onChangePage }) {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const reaponse = await fetch(apiURL(encodeURIComponent(onData)))
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
        <div>
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
                <button onClick={() => onChangePage("recipelist")}>Back</button>
            </div>
    );
}


export default DisplayRecipe;