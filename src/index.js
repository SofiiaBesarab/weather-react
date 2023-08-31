import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <App />
    <br />
    <a href="https://github.com/SofiiaBesarab/weather-react">GitHub</a>
  </StrictMode>
);
