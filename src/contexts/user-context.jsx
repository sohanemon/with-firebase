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
import { createContext, useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/app";
export const auth = getAuth(app);

export const User = createContext({});

const UserContext = ({ children }) => {
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsPending(false);
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
        goToRoot();
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
        goToRoot();
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
        goToRoot();

        // ...
      })
      .catch((error) => {
        // ...
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        goToRoot();
      })
      .catch((error) => {});
  };
  const goToRoot = () => {
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <User.Provider
      value={{
        isPending,
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
