import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  DocumentTitle,
  NodataIndication,
  Postcomponent,
} from "../../components";
import { BASE_URL } from "../../Config";
import { IPost } from "../../interfaces";

const FeedPage: React.FC = () => {
  DocumentTitle("Profile | FindMe", true);

  const [item, setItem] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    await axios
      .get(`${BASE_URL}/posts/findAllPost`)
      .then((res) => {
        console.log(res.data.message);
        setItem(res?.data?.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-10">
      {item.length < 1 ? (
        <NodataIndication />
      ) : (
        item.map((item, index) => (
          <Postcomponent
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))
      )}
    </div>
  );
};

export default FeedPage;
