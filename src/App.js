// App.js //

import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const handleDelete = (index) => {
    setRecipes((prevRecipes) => prevRecipes.filter((unusedVariable, i) => i !== index));
  };

  const handleCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <header><h1>Delicious Noms: Nom Nom Nom</h1></header>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
      <RecipeCreate onCreate={handleCreate} />
    </div>
  );
};

export default App;

/* Former version of function, replaced for concision:

const handleDelete = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };
*/