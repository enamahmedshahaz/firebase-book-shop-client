
import Root from "../layout/Root";
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        loader: ({ params }) => fetch(`https://firebase-book-shop-server.vercel.app/api/products/${params.bookId}`),
        element: <PrivateRoutes> <BookDetails></BookDetails> </PrivateRoutes>,

      },
      {
        path: "/products",
        element: <PrivateRoutes> <Products></Products> </PrivateRoutes>,
        loader: () => fetch('https://firebase-book-shop-server.vercel.app/api/products'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

    ]
  },
]);

export default router;