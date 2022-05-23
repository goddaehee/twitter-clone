import React from "react";
import { useEffect, useState } from "react";
import { getAuthService } from "fbase";
import AppRouter from "components/Router";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(getAuthService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = getAuthService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => updateProfile(user, args)
    });
  }
  return (
    <>
      {init ? <AppRouter
        refreshUser={refreshUser}
        isLoggedIn={isLoggedIn}
        userObj={userObj} /> : "Initializing..."}
    </>
  )
}

export default App;
