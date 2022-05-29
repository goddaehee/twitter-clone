import React, { useState, useEffect } from "react";
import { dbservice } from "fbase";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(dbservice, "nweets"), orderBy("createAt", "desc")),
      (snapshot) => {
        const nweetArr = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        setNweets(nweetArr);
      }
    );
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatoId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
