import { useContext } from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";
import { UserPreferencesContext } from "../../Context/UserPreferencesContext.jsx";
import "./recipeList.css";

export const RecipeList = () => {
  const { recipes, deleteRecipeToList, isLoading } = useContext(
    UserPreferencesContext
  );
  return (
    <main className="recipeList">
      {isLoading.read && <p>Loading...</p>}
      {recipes.map(
        (
          recipe //js kodu için{} açtık ve içine map metodunu yazdık. App.jsx den gelen RecipeList recipes={fakeRecipes} ifadedeki recipeleri burada parametre olarak verdik ve map ile 1 recipe yakaladık. o yakaladığımız recipeyi de alt componenti olan RecipeCard içinden gelmesini istediğimiz aynı App.jsx de yaptığımız gibi <RecipeCard recipe={recipe} ile içinden recipe çekiyoruz.
        ) => (
          <RecipeCard
            {...recipe}
            deleteRecipeToList={deleteRecipeToList}
            key={recipe.id}
          /> /*Yukarıdan istek atıp çektiğimiz dataları map ile dönerek RecipeCard içine spread ederek(dolayısıyla önceki bilgileri de kaybetmiyoz hepsini const [recipes, setRecipes] = useState([]); dizi şeklinde useState de tutuyoruz ve spread ile dizi içine yayarak kaybetmiyoz.) tek bir recipe olacak şekilde gönderiyoruz. RecipeCard componentinde ise hangi bilgileri kullanacaksak tek tek parametre de o bilgileri atıyoruz (title,description ve image yi gösteridğimiz için orada bu parametreleri kullanırız) */
        )
      )}
    </main>
  );
};
