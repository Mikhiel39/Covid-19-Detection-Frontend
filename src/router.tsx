import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";
import Error from "./pages/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="form" element={<Form />} />
      <Route path="result" element={<Result />} />
      <Route path="error" element={<Error />} />
    </Route>
  )
);