import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} /> {/* Changed path="" to index */}
      <Route path="form" element={<Form />} />
      <Route path="result" element={<Result />} />
    </Route>
  )
);