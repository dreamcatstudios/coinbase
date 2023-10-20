import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const route = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/coin/:id", element: <CoinPage /> },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
