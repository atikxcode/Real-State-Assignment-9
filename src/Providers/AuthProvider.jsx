import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state changed', currentUser)
      setUser(currentUser)
    });
    return () => {
      unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;