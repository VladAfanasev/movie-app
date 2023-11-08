import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/Routes/RootLayout";
import SearchPage from "@/Pages/SearchPage";
import MoviePage from "@/Pages/Movie";
import Featured from "@/Pages/Featured";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/featured",
        element: <Featured />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);
