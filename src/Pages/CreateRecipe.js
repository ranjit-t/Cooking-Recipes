import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";

export default function CreateRecipe() {
  const { recipes, setRecipes } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [newIngredient, setNewIngredient] = useState([]);
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");
  //i storage
  function getlocalRecipes() {
    let localRecipes;
    if (localStorage.getItem("localRecipes") === null) {
      localRecipes = [...recipes];
    } else {
      localRecipes = JSON.parse(localStorage.getItem("localRecipes"));
    }

    return localRecipes;
  }

  let localRecipes = getlocalRecipes();

  function addToStorage(recipe) {
    localRecipes.push(recipe);
    localStorage.setItem("localRecipes", JSON.stringify(localRecipes));
  }

  return (
    <div>
      <h2>Create Recipe</h2>
      <div className="form-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const recipe = {
              title: title,
              cookingTime: `${cookingTime} minutes`,
              ingredients: [...ingredients, newIngredient],
              method: method,
              id: Math.floor(Math.random() * 9999).toString(),
            };
            if (
              title &&
              cookingTime &&
              (ingredients || newIngredient) &&
              method
            ) {
              addToStorage(recipe);

              setTitle("");
              setCookingTime("");
              setIngredients([]);
              setNewIngredient("");
              setMethod("");
              setMessage("recipe added successfully!");
              setTimeout(() => {
                setMessage("");
              }, 3000);
            } else {
              setMessage("please, enter all the fields");
              setTimeout(() => {
                setMessage("");
              }, 3000);
            }
          }}
        >
          <label>
            Title :{" "}
            <input
              value={title}
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label>
            Cooking Time :{" "}
            <input
              value={cookingTime}
              type="number"
              onChange={(e) => {
                setCookingTime(e.target.value);
              }}
            />
          </label>
          <label>
            Ingredients :{" "}
            <input
              value={newIngredient}
              type="text"
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setIngredients([...ingredients, newIngredient]);
                setNewIngredient("");
              }}
            >
              add more
            </button>
            {ingredients && <p>{JSON.stringify(ingredients, null, 2)}</p>}
          </label>
          <label>
            Method :{" "}
            <textarea
              value={method}
              type="text"
              onChange={(e) => {
                setMethod(e.target.value);
              }}
            />
          </label>
          <button className="btn-add-recipe">add recipe</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
