// RecipeCreat.js

import React, { useState } from "react";

function RecipeCreate({ onCreate }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const objWithEmptyVals = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(objWithEmptyVals);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formData);
    setFormData(objWithEmptyVals); 
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /></td>
            <td><input type="text" name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} /></td>
            <td><input type="text" name="photo" placeholder="URL" value={formData.photo} onChange={handleChange} /></td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange}></textarea>
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" value={formData.preparation} onChange={handleChange}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
