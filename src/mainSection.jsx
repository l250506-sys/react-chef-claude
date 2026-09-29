import React from "react";
import { Recipe } from "./claudeRecipe.jsx";
import { IngredientList } from "./ingredientList.jsx";
import { getRecipeFromMistral } from "./ai.js";

export function Main(){

    const [ingredients,setIngredients] = React.useState([]);
    let mappedIngredients = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);

    const[recipe,setRecipe] = React.useState("");

    function addIngredient(formData){
        /*event.preventDefault();
        //Form submission causes page to refresh

        const form = new FormData(event.currentTarget);
        const newIngredient = form.get("ingredient"); //Name property can be used to get elements in form

        setIngredients(prevState => [...prevState,newIngredient])*/

        //The below is a more efficient way to do it

        const newIngredient = formData.get("ingredient");

        if(newIngredient===""){
            return
        }

        setIngredients((prevArray)=>{
            return (
                [...prevArray,newIngredient]
            )
        })

        //action can be used to not write all the unneccasary code
    }

    async function showRecipe(){
        const response = await getRecipeFromMistral(ingredients);
        setRecipe(response);
    }


    //onSubmit on form is more semantically accurate

    const recipeSection = React.useRef(null);

    React.useEffect(()=>{
        if(recipe !== "" && recipeSection !== null){
            console.log(ref)
            recipeSection.current.scrollIntoView({behavior : "smooth"});
        }
    },[recipe]);


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length> 0 && <section>
                 <IngredientList/>
                <ul className="ingredients-list" aria-live="polite">
                    {mappedIngredients}
                </ul>
                {ingredients.length>3 && <div className="get-recipe-container">
                    <div ref={recipeSection}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={showRecipe}>Get a recipe</button>
                </div>}
            </section>}
            <Recipe recipe = {recipe} mappedIngredients = {mappedIngredients}/>
        </main>
    )
}
