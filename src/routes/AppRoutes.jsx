import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil"
import Layout from "../Layout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Carrinho",
        element: <Carrinho />,
      },
      {
        path: "Perfil",
        element: <Perfil />,
      },
    ],
  },
]);
