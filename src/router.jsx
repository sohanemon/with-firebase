import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/hero";
import Main from "./components/main";
import Signin from "./components/signin";
import Signup from "./components/signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
