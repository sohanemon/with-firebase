import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { User } from "./contexts/user-context";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(User);
  if (user?.uid) return children;
  return <Navigate to={"/signin"}></Navigate>;
};

export default PrivateRoute;
