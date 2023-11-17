import React from "react";
import { useContext, useState } from "react";
import "./navigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserPreferencesContext } from "../../Context/UserPreferencesContext.jsx";
import { AuthContext } from "../../Context/AuthContext.jsx";

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);
  const [isToggled, setIsToggled] = useState(theme === "dark");

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div
      className={`slider-container ${isToggled ? "dark" : "light"}`}
      onClick={handleToggle}
    >
      <div className="slider-button"></div>
    </div>
  );
};

export const NavigationBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="nav-header">
      <h1 className="recipe-platform">Recipe Platform</h1>
      <nav className="nav">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-newrecipe">Add Recipe</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
          <li>
            <button
              className="nav-login"
              onClick={isAuthenticated ? handleLogout : handleLogin}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </li>
          <li>
            <ThemeSlider />
          </li>
        </ul>
      </nav>
    </header>
  );
};
