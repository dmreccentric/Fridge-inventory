import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // <-- this renders the Home component
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
