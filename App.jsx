import "./App.css";
import { NavigationBar } from "./Component/NavigationBar/NavigationBar.jsx";
import React from "react";
import { useContext } from "react";
import {
  UserPreferencesContext,
  UserPreferencesProvider,
} from "./Context/UserPreferencesContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddNewRecipePages } from "./Pages/AddNewRecipePages/AddNewRecipePages.jsx";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import { SettingPage } from "./Pages/SettingPage/SettingPage.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import PrivateRoute from "./Services/PrivateRoute.jsx";
import Footer from "./Component/Footer/Footer.jsx";

export function App() {
  const { theme } = useContext(UserPreferencesContext);
  return (
    <div className={theme}>
      <AuthProvider>
        <BrowserRouter>
          <NavigationBar />
          <UserPreferencesProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/add-newrecipe"
                element={<PrivateRoute element={<AddNewRecipePages />} />}
              />
              <Route
                path="/settings"
                element={<PrivateRoute element={<SettingPage />} />}
              />
            </Routes>
          </UserPreferencesProvider>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
