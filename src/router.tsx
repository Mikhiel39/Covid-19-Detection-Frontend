import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/result" element={<Result />} />
    </Route>
  )
);
