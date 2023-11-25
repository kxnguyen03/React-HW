import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';
import App from './TicTacToe';
import Jeopardy from "./Jeopardy";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Jeopardy />
  </React.StrictMode>
);


