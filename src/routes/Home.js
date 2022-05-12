import Nweet from "components/Nweet";
import { getFirestore as dbService, addDoc, collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";
import { v4 } from "uuid";
import React, { useState, useEffect } from "react";


export default function ({ userObj }) {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState();
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
        /* await addDoc(collection(dbService(), "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        }) */
        const fileRef = ref(getStorage(), `${userObj.uid}/${v4()}`);
        const response = await uploadString(fileRef, attachment, "data_url");
        console.log(response);
        setNweet("");
    };

    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value);
    }

    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();

        reader.onloadend = (finishedEvent) => {
            setAttachment(finishedEvent.currentTarget.result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachmentClick = () => setAttachment(null);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={nweet} onChange={onChange} placeholder="what is on your mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Nweet" />
                {attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearAttachmentClick}>Clear</button>
                    </div>
                )}
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