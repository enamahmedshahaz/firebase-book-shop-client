import About from "../About/About";
import Blog from "../Blog/Blog";
import BookDetails from "../BookDetails/BookDetails";
import Books from "../Books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Books></Books>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/books/:bookId",
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
        
      ]
    },
  ]);

  export default router;