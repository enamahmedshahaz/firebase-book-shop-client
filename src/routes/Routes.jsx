import About from "../About/About";
import Blog from "../Blog/Blog";
import BookDetails from "../BookDetails/BookDetails";
import Books from "../Books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import Root from "../layout/Root";

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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