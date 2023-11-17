import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserPreferencesContext = createContext();
export const UserPreferencesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({ read: false, add: false });

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("light");

  //----------------------------GET METODU---------------------------------
  useEffect(() => {
    /*Yan etkiyi copmponentin dışında geliştiği için kullanırız.*/

    const getRecipes = async () => {
      //ASYNC LİSTEYİ GETİRME METODU
      try {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
        const response = await axios
          .get("http://localhost:3001/fakeRecipes") //axios ile istek atmak fetch ve xhr gibi istek atma yönteminden biridir ve diğerlerine göre daha KULLANIŞLIDIR. GET ile listeyi çekeriz.
          .then((response) => {
            setRecipes(response.data);
          });
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
      } catch (error) {
        console.log("There was an error fetching the recipes!", error);
      } /*Dependency array kullanmamızın nedeni eğer ki spesifik bir değişken ile belirtirsek o değişirse bu useEffect i çalıştırırız onun dışında hiç çalışmaz. AMA BİZ BURADA BİR PARAMETRE GÖNDERMEDEN DEPENDENCY BELİTTİK SADECE 1 KERE İSTEK ATTIRIRIZ. ***not: eğerki [} ifadesini koymasaydık sürekli istek atardı bu da sıkıtıya sokardı işlemi.*/
    };
    getRecipes();
  }, []);

  //----------------------------ADD METODU---------------------------------
  const addRecipeToList = async ({ title, description, image }) => {
    //ASYNC EKLEME METODU
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    const newRecipe = { title, image, description };
    const response = await axios.post(
      "http://localhost:3001/fakeRecipes",
      newRecipe
    );
    if (response.status === 201) {
      setRecipes((preRecipeList) => [...preRecipeList, response.data]);
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  // const addRecipeToList = (newRecipe) => {
  //   //EKLEME METODU
  //   setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  // };
  /* ***AddNewRecipeye bu ekleme metodunu sarkıtıp işlemi yaptırıp içine metodun bir menü ekletip geri çekeceğiz ve ...prevRecipes e eklemiş olacağız ve son listem setRecipes sayesinde tetiklenecek ve güncellenmiş olacak recipes im. Yani burası alltan gelecek AddNewRecipe componentinden. BU YÜZDEN İKİ KARDEŞ OLAN AddNewRecipe VE RecipeList COMPONENTLERİ ARASINDA ORTAK BİR ALAN OLAN PARENTLARI App.jsx DEN GEÇİŞ YAPMAK DAHA SAĞLIKLIDIR. BİLGİLERİ AddNewRecipe DEN ÇEKİP BURADA GET İSTEĞİ setRecipes AddNewRecipe COMPONENETİNDEN GELEN BİLGİ İLE GÜNCELLENDİĞİNDEN DOLAYI addRecipeToList METODUNDA, YUKARIDAKİ USE EFFECT TETİKLENDİ 1 KERELİK VE O LİSTEYİ DE GENE App.jsx DEN RecipeList KISMINA GÖNDERDİ SON HALİNİ LİSTENİN*** */

  /*Bu metodu aşağı AddNewRecipe componentine sarkıtırız içine yeni bir menü ekler ve yukarı buraya çekeriz. */

  /*Programda 1 ekleme yapınca listeninde tetiklenmesi adına gene yukarıdaki const [recipes, setRecipes] = useState([]); useState yi kullanarak addRecipeToList metodunu oluştururum. Buradaki setRecipes e bağlarız ve o değişince benim recipes değişkenimde tetiklenmiş olacak ve her menü ekleyişimde listemde kendini useState deki durum değişikliği sebebi ile yenilenmiş olacak. Yani useState ortak kullanıldığı için nerede değişkenlik sağlarsa diğer kullanıldığı yerde tetiklenmiş oluyor. */

  //----------------------------DELETE METODU---------------------------------
  const deleteRecipeToList = async (id) => {
    //ASYNC SİLME METODU
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));
    const response = await axios.delete(
      `http://localhost:3001/fakeRecipes/${id}`
    );
    if (response.status === 200) {
      setRecipes((prevRecipeList) =>
        prevRecipeList.filter((recipe) => recipe.id !== id)
      );
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
  };

  //----------------------------THEME---------------------------------

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <UserPreferencesContext.Provider
      value={{
        addRecipeToList,
        isLoading,
        recipes,
        deleteRecipeToList,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};
