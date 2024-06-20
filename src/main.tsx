import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
