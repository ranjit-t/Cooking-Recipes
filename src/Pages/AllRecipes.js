import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";

export default function AllRecipes() {
  const { recipes } = useContext(UserContext);

  return (
    <div>
      <h2>All Recipes</h2>
      <div className="all-recipes">
        {recipes.map((recipe) => {
          return (
            <div className="each-recipe" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>
                <b>Ingredients : </b>
                {recipe.ingredients}
              </p>
              <p>
                <b>Cooking Time : </b>
                {recipe.cookingTime}
              </p>
              <p>
                <b>Method : </b>
                {recipe.method.substr(0, 100)}
                <a href={`/recipes/${recipe.id}`}>Read More</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
