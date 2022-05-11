import React from "react";
import { auth } from "fbase";

import { useHistory } from "react-router-dom";
export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
