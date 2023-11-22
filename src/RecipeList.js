// RecipeList.js

import React from "react";
import ColumnHeadings from "./ColumnHeadings";

function RecipeList({ recipes, onDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.

  const keys = Object.keys(recipes[0]);

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <ColumnHeadings keys={keys} />
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img className="recipe-image" src={recipe.photo} alt={`${recipe.name} recipe`}/></td>
              {/* [structure of next two columns as suggested by example in instructions] */}
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              {/* TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked */}
              <td>
                <button name="delete" onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;

/* What follows is what I replaced with 
   `<ColumnHeadings keys={keys} />`
   and the added child component `ColumnHeadings.js`:

<tr>
  <th>Name</th>
  <th>Cuisine</th>
  <th>Photo</th>
  <th>Ingredients</th>
  <th>Preparation</th>
  <th>Actions</th> 
</tr>

*/