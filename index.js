import { createRoot } from "react-dom/client";
import { App } from "./App";
import { UserPreferencesProvider } from "./Context/UserPreferencesContext.jsx";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <UserPreferencesProvider>
    <App />
  </UserPreferencesProvider>
);
