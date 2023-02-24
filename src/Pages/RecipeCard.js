import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/Context";
import { useParams } from "react-router-dom";

export default function RecipeCard() {
  const { id } = useParams();
  const { recipes } = useContext(UserContext);
  const [localRecipes, setLocalRecipes] = useState([]);

  useEffect(() => {
    function getlocalRecipes() {
      let localRecipes;
      if (localStorage.getItem("localRecipes") === null) {
        localRecipes = [...recipes];
      } else {
        localRecipes = JSON.parse(localStorage.getItem("localRecipes"));
      }

      return localRecipes;
    }

    let newLocalRecipes = getlocalRecipes();
    setLocalRecipes(newLocalRecipes);
  }, []);

  let cardrecipe = localRecipes.filter(
    (recipe) => parseInt(recipe.id) === parseInt(id)
  );
  console.log(JSON.stringify(cardrecipe, null, 2));

  return (
    <div className="recipe-card">
      <h2>Recipe</h2>
      <div>
        {cardrecipe.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <div>
                <b>Ingredients : </b>
                {recipe.ingredients.map((ing, idx) => {
                  return (
                    <p key={idx} className="ingredients-list">
                      {ing}
                    </p>
                  );
                })}
              </div>
              <p>
                <b>Cooking Time : </b>
                {recipe.cookingTime}
              </p>
              <p>
                <b>Method : </b>
                {recipe.method}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
