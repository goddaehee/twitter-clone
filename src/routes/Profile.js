import React, { useEffect, useState } from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { query, getFirestore, orderBy, where, collection, onSnapshot } from "firebase/firestore";

export default ({ refreshUser, userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [nweets, setNweets] = useState([]);
    const onLogOutClick = () => {
        signOut(getAuth());
        history.push("/");
    }

    const getMyNweets = async () => {
        const q = query(
            collection(getFirestore(), "nweets")
            , orderBy("createdAt", "desc")
            , where("creatorId", "==", userObj.uid)
        );

        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(nweetArr)
            setNweets(nweetArr);
        });
    };
    const onChange = (event) => {
        const { target: { value } } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(getAuth().currentUser, { displayName: newDisplayName });
        }
        refreshUser();
    };

    useEffect(() => {
        getMyNweets();
    }, [])
    return <>
        <form onSubmit={onSubmit} >
            <input type="text" onChange={onChange} placeholder="display name" value={newDisplayName} />
            <input type="submit" value="update Profile" />
        </form>
        <button onClick={onLogOutClick}>
            Log Out
        </button>
    </>;
};