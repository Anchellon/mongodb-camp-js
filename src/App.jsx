import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Contribute from "./pages/Contribute";
import { loader as categoriesLoader } from "./pages/Categories";
import { loader as userLoader } from "./pages/SharedLayout";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />} loader={userLoader}>
        <Route index element={<Home />} loader={categoriesLoader} />

        <Route path="contribute" element={<Contribute />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
