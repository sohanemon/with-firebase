import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/hero";
import Main from "./components/main";
import Signin from "./components/signin";
import Signup from "./components/signup";
import UserContext from "./contexts/user-context";
import PrivateRoute from "./private-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContext>
        <Main />
      </UserContext>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Hero />
          </PrivateRoute>
        ),
      },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
