import Nweet from "components/Nweet";
import { getFirestore as dbService, addDoc, collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";


export default function ({ userObj }) {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    // const [refresh, setRefresh] = useState("");
    // const getNweets = async () => {
    //     const dbNweets = await getDocs(collection(dbService(), "nweets"));
    //     dbNweets.forEach(document => {
    //         const nweetObject = {
    //             ...document.data(),
    //             id: document.id,
    //         };
    //         setNweets((prev) => {
    //             if (prev.length == 0) {
    //                 return [nweetObject];
    //             }

    //             let prevArg = prev.filter((prevNweet) => prevNweet.id !== nweetObject.id);
    //             prevArg = [nweetObject, ...prevArg];

    //             return prevArg;
    //         });
    //     }); //왜 두번호출이될까..
    // }
    useEffect(() => {
        //getNweets();
        const q = query(
            collection(dbService(), "nweets"), orderBy("createdAt", "desc")
        );

        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(collection(dbService(), "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        })
        // setRefresh(nweet);
        setNweet("");
    };

    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={nweet} onChange={onChange} placeholder="what is on your mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet nweetObj={nweet}
                        key={nweet.id}
                        isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div >
    )
}