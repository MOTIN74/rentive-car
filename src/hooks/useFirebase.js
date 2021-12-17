import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  //   sign in with google
  const googleLogin = (location, history) => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        //
        saveUser(user.email, user.displayName, "PUT");

        //
        const redirect_url = location?.state?.from || "/";
        history.push(redirect_url);
        // ...
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   create new user with email and password
  const registerUser = (email, password, history, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // Signed in
        // save user to the database
        saveUser(email, name, "POST");
        //
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.push("/home");
        // console.log("register page", result);
      })
      .catch((error) => {
        setError(error);
        console.log(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   sign in user with email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        const redirect_url = location?.state?.from || "/";
        history.replace(redirect_url);
        // console.log("login page", result);
        // ...
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   observed user sign in or sign out
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  //   signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    admin,
    user,
    error,
    registerUser,
    loginUser,
    googleLogin,
    logOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
