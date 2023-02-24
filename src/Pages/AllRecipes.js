import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/Context";

export default function AllRecipes() {
  const { recipes, setRecipes } = useContext(UserContext);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [InputText, setInputText] = useState("");

  useEffect(() => {
    function getlocalRecipes() {
      let localRecipes;
      if (localStorage.getItem("localRecipes") === null) {
        return recipes;
      } else {
        localRecipes = JSON.parse(localStorage.getItem("localRecipes"));
        return localRecipes;
      }
    }
    let localRecipes = getlocalRecipes();
    setRecipes([...localRecipes]);
  }, []);

  useEffect(() => {
    let newRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(InputText.toLocaleLowerCase())
    );
    setFilteredRecipes(newRecipes);
  }, [InputText, recipes]);

  return (
    <div>
      <h2>All Recipes</h2>
      <div>
        <label>
          <input
            type="text"
            placeholder="search recipe"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </label>
      </div>
      {filteredRecipes.length !== 0 ? (
        <div className="all-recipes">
          {filteredRecipes.map((recipe, rcpidx) => {
            return (
              <div className="each-recipe" key={recipe.id}>
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
                  {recipe.method.substr(0, 100)}
                  <a href={`/recipes/${recipe.id}`}>Read More</a>
                </p>
                <button
                  className="btn-delete-recipe"
                  onClick={(e) => {
                    e.preventDefault();
                    const newRecipes = recipes.filter(
                      (recipe, idx) => parseInt(idx) !== parseInt(rcpidx)
                    );
                    setRecipes(newRecipes);
                    localStorage.setItem(
                      "localRecipes",
                      JSON.stringify(newRecipes)
                    );
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Nothing Found</div>
      )}
    </div>
  );
}
