import { useEffect, useState } from "react";
import ListComments from "../ListComments";

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

    async function handleClick(data, e) {
        const recipe = {
            fav: data.recipe.label,
            img: data.recipe.images.SMALL.url,
            cal: data.recipe.calories,
            type: data.recipe.mealType,
            uri: data.recipe.uri
        }
        e.target.hidden = true;
        await fetch("api/favourites", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(recipe),
        })
        console.log(data)
    }

    return (
        <div>
            <div className="displayRecipe">
                <>{data && data.map((recipe, index) => (
                    <div key={index} className="container">
                        <div className="container-head">
                            <div className="container-head-picture">
                                <img className="recipepageimg" src={recipe.recipe.images.REGULAR.url}></img>
                            </div>
                        </div>
                        <div className="container-body">
                            <div className="conatiner-head-info">
                                <h1>{recipe.recipe.label}</h1>
                                <button onClick={(e) => handleClick(recipe, e)} >❤️</button>
                                <ul>Ingredients</ul>
                                {recipe.recipe.ingredientLines.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}

                                {recipe.recipe.dietLabels.map((label, index) => (
                                    <p key={index}>{label}</p>
                                ))}

                                <button className="fullRecipe" onClick={() => window.location.href = recipe.recipe.url} >Check the full recipe</button> <br />
                                <button className="searchNew" onClick={() => onChangePage("recipelist")}>Search new recipe</button>
                            </div>
                        </div>
                    </div>
                ))}
                </>
            </div>
            <div className="commentslist">
                <>{data && data.map((recipe, index) => (
                    <div key={index}>
                        <ListComments recipe={recipe.recipe.label} />
                    </div>
                ))}</>
            </div>
        </div>
    );
}


export default DisplayRecipe;