import React from "react";
import { AddNewRecipe } from "../../Component/AddNewRecipe/AddNewRecipe.jsx";
import { RecipeList } from "../../Component/RecipeList/RecipeList.jsx";

export const AddNewRecipePages = () => {
  return (
    <>
      <AddNewRecipe />;
      <RecipeList />
    </>
  );
};
