import { useState, useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        <label>LOGIN</label>
        <br />
        <input
          className="username"
          type="email"
          placeholder="Enter your email."
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <br />
        <input
          className="password"
          type="text"
          placeholder="Enter your password."
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
