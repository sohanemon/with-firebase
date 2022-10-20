import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/app";
export const auth = getAuth(app);

export const User = createContext({});
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const createUserWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        // ..
      });
  };
  return (
    <User.Provider value={{ user, createUserWithEmail }}>
      {children}
    </User.Provider>
  );
};

export default UserContext;
