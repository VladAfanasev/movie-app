import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/Routes/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
  },
]);
