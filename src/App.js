import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "5e329f46";
  const APP_KEY = "9b781959c16ef7b63acb38e1c61dde6b";
  const API_URL = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    loadData();
  }, [input]);

  const loadData = async () => {
    //data is stored as array in hits key
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Recipe Search 🍕</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        className="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {recipes.map((r, id) => (
        <Recipe
          key={id}
          title={r.recipe.label}
          image={r.recipe.image}
          url={r.recipe.url}
          // dishType={r.recipe.dishType[0]}
          // mealType={r.recipe.mealType[0]}
          // cuisineType={r.recipe.cuisineType[0]}
        />
      ))}
    </div>
  );
};

export default App;
