import React, { useContext } from "react";
import { useState } from "react";
import "./AddNewRecipe.css";
import { UserPreferencesContext } from "../../Context/UserPreferencesContext.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export const AddNewRecipe = () => {
  const { addRecipeToList, isLoading } = useContext(UserPreferencesContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleErr(false);
    setDescriptionErr(false);
    setImageErr(false);

    if (title.trim() && description.trim() && image.trim()) {
      addRecipeToList({ title, description, image });
      setTitle("");
      setDescription("");
      setImage("");
    } else {
      !title.trim() && setTitleErr(true);
      !description.trim() && setDescriptionErr(true);
      !image.trim() && setImageErr(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe">
      <div>
        <input
          className="title"
          type="text"
          placeholder="Recipe Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        {titleErr && (
          <p className="input-err">Recipe Title can not be empty!</p>
        )}
        <br />
        <textarea
          className="description"
          cols="30"
          rows="10"
          placeholder="Recipe Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
        {descriptionErr && (
          <p className="input-err">Recipe Description can not be empty!</p>
        )}
        <br />
        <input
          className="img-url"
          type="text"
          placeholder="Image URL"
          onChange={(event) => setImage(event.target.value)}
          value={image}
        />
        {imageErr && <p className="input-err">Image URL can not be empty!</p>}
        <br />
        <button className="button-add-new-recipe" type="submit">
          {isLoading.add ? "Loading..." : "Add Recipe"}
        </button>
      </div>
    </form>
  );
};
