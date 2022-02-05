import { render } from "react-dom";
import "./style.scss";

import { AuthProvider } from "./context/AuthProvider";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  rootElement
);
