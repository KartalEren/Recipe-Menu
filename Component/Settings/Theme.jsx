import { useContext, useEffect, useState } from "react";
import "./theme.css";
import { UserPreferencesContext } from "../../Context/UserPreferencesContext.jsx";
import axios from "axios";

export const Theme = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setUser(response.data));
    };

    getUserProfile();
  }, []);
  return (
    <div className="theme">
      <label>Theme</label>
      <button className="button-theme" onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}{" "}
      </button>
      <div className="user-profile">
        <img src={user.avatar} alt="" />
        <p>Welcome {user.name}</p>
        <p>Role: {user.role}</p>
        <p>Emal: {user.email}</p>
      </div>
    </div>
  );
};
