import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/app";
export const auth = getAuth(app);

export const User = createContext({});

const UserContext = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("error in onAuthStateChanged");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [user, setUser] = useState({});
  const createUserWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const _signOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        console.log("🚀 > signInWithFacebook > error", error);

        // ...
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("🚀 > signInWithGoogle > error", error);
      });
  };

  return (
    <User.Provider
      value={{
        user,
        signInWithGoogle,
        createUserWithEmail,
        _signOut,
        signInWithEmail,
        signInWithFacebook,
      }}
    >
      {children}
    </User.Provider>
  );
};

export default UserContext;
