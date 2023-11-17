import axios from "axios";

const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response);
    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  getCurrenUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;
