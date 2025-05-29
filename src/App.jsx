import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ExpiryCountdown from "./Pages/ExpiryCountdown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/expiry",
    element: <ExpiryCountdown />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
