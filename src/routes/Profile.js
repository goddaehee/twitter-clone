import React from "react";
import { auth } from "fbase";

import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    auth.signOut();
    history("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
