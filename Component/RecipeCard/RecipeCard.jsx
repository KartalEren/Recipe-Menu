import React, { useState } from "react";
import "./recipeCard.css";

export const RecipeCard = ({
  title,
  image,
  description,
  id,
  deleteRecipeToList,
}) => {
  /*RecipeList den spread ile recipe gönderdiğimiz için içindeki propları aynı burada istediklerimizi yazabilriz.*/
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={image} alt="" />
            {<h3>{title} </h3>}
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            {<p className="card-description">{description} </p>}
            <button
              className="delete-button"
              onClick={async () => {
                setIsDeletedLoading(true);
                await deleteRecipeToList(id);
                setIsDeletedLoading(false);
              }}
            >
              {isDeletedLoading ? "Loading" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
