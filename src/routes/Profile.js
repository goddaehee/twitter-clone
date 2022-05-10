import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => {
        signOut(getAuth());
        history.push("/");
    }
    return <>
        <button onClick={onLogOutClick}>
            Log Out
        </button>
    </>;
};