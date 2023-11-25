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
      <div>
        <button className="button-theme" onClick={toggleTheme}>
          {" "}
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}{" "}
        </button>
      </div>
      <div class="container">
        <div class="row my-3">
          <div class="col-md-4 mb-3">
            <div class="user-card">
              <p className="name">
                Welcome <strong>{user.name}</strong>
              </p>
              <hr className="underline" />
              <img className="user-image" src={user.avatar} alt="" />
              <hr className="underline" />
              <p className="role">Role: {user.role}</p>
              <p className="email">Email: {user.email}</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
