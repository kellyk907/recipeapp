import React from "react";
const EditRecipeForm = () => {
  return (
    <div className='recipe-form'>
      <h2>Edit "{}"</h2>
      <button className='cancel-button'>Cancel</button>
      <form>
        <label>Title</label>
        <input type='text' name='title' value='' onChange='' required />
        <label>Ingredients</label>
        <textarea name='ingredients' value='' onChange='' required />
        <label>Instructions</label>
        <textarea name='instructions' value='' onChange='' required />
        <label>Description</label>
        <textarea name='description' value='' onChange='' required />
        <label>Image</label>
        <input type='text' name='image_url' value='' onChange='' required />
        <label>Servings</label>
        <input type='number' name='servings' value='' onChange='' required />
        <button type='submit'>Update Recipe</button>
      </form>
    </div>
  );
};
export default EditRecipeForm;
 