import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRecipes from "./Pages/AllRecipes";
import CreateRecipe from "./Pages/CreateRecipe";
import { UserContext } from "./Context/Context";
import React, { useState } from "react";

function App() {
  let [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Veggie Stew",
      ingredients: ["1 Carrot", "1 Leek", "200g Tofu", "300ml Veg stock"],
      method:
        "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl and cover with a lid. 4. Place the lid on the oven and cook for 40 minutes. 5. Serve with a slaw of your choice",
      cookingTime: "45 minutes",
    },
    {
      id: "2",
      title: "Veggie Pizza",
      ingredients: [
        "1 Base",
        "Tomata pasata",
        "1 Green pepper",
        "100g Mushrooms",
      ],
      method:
        "1. Pre-heat the oven to 200C/3C/gas 5. Add the pasata, green pepper and mushrooms to the base. Place the lid on the oven and cook for 30 minutes. 5. Serve with a slaw of your choice",
      cookingTime: "35 minutes",
    },
    {
      id: "3",
      title: "Greek Salad",
      ingredients: [
        "1 Onion",
        "1 Block of Feta",
        "Olives",
        "Tomatoes",
        "Olive Oil",
      ],
      method:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minima ex rem quis similique eum ratione quaerat, voluptas molestias ut repudiandae delectus voluptates. Eius esse at tenetur ab accusamus excepturi?",
      cookingTime: "35 minutes",
    },
    {
      id: "4",
      title: "Greek Tofu",
      ingredients: [
        "1 Onion",
        "1 Block of Feta",
        "Olives",
        "Tomatoes",
        "Olive Oil",
      ],
      method:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minima ex rem quis similique eum ratione quaerat, voluptas molestias ut repudiandae delectus voluptates. Eius esse at tenetur ab accusamus excepturi?",
      cookingTime: "35 minutes",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <h2>Cooking Recipes</h2>
        <div className="nav-bar">
          <NavLink className="nav-link" to="/">
            Recipes
          </NavLink>
          <NavLink className="nav-link" to="/create-new-recipe">
            Create New Recipe
          </NavLink>
        </div>
        <UserContext.Provider value={{ recipes, setRecipes }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="route-page">
                  <AllRecipes />
                </div>
              }
            />
            <Route
              path="/create-new-recipe"
              element={
                <div className="route-page">
                  <CreateRecipe />
                </div>
              }
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
