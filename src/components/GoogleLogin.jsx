import React, { useState, useEffect } from "react";
import { gapi, loadAuth2 } from "gapi-script";

import "./GoogleLogin.css";
import { useCallback } from "react";
import Feed from "./Feed";
import Home from "./Home"


const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const attachSignin = useCallback((element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        updateUser(googleUser);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }, []);

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_ID, "");
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById("customBtn"), auth2);
      }
    };
    setAuth2();
  }, [attachSignin]);

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_ID, "");
        attachSignin(document.getElementById("customBtn"), auth2);
      };
      setAuth2();
    }
  }, [attachSignin, user]);

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setUser({
      name: name,
      profileImg: profileImg,
    });
  const token = currentUser.xc.access_token

  localStorage.setItem('token', token)
  console.log("user : ",currentUser)
  };


  const signOut = (props) => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log("User signed out.");
    });
  };

  if (user) {
    return (
      <div>
        <Feed user={user} signOut={signOut} />
        
        
      </div>
    );
  }

  console.log(process.env.REACT_APP_CLIENT_ID)

  return (
    
    <Home/>
  );
};

export default GoogleLogin;
