import FAQ from "../pages/FAQ/FAQ";
import Root from "../layout/Root";
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BookDetails from "../pages/BookDetails/BookDetails";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/api/products'),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/books/:bookId",
        loader: ({ params }) => fetch(`http://localhost:5000/api/products/${params.bookId}`),
        element: <BookDetails></BookDetails>,

      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

    ]
  },
]);

export default router;