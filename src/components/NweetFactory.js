import { v4 } from "uuid";
import { useState } from "react"
import { getFirestore as dbService, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            console.log("attach");
            const attachmentRef = ref(getStorage(), `${userObj.uid}/${v4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }

        await addDoc(collection(dbService(), "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        });

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

    return <form onSubmit={onSubmit}>
        <input type="text" value={nweet} onChange={onChange} placeholder="what is on your mind?" maxLength={120} />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
            <div>
                <img src={attachment} width="50px" height="50px" />
                <button onClick={onClearAttachmentClick}>Clear</button>
            </div>
        )}
    </form>;
}


export default NweetFactory;