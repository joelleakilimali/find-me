import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
import { CommentElement } from "../interfaces";
import { Routes } from "../routes";
const Postcomponent: React.FC<CommentElement> = ({
  image,
  description,
  title,
}) => {
  const [items, setItems] = useState<CommentElement[]>();

  return (
    <div className="mx-5 ">
      <div className=" card h-auto  flex-row w-full justify-between ">
        <div className="w-3/4">
          <img
            src="/Assets/imgs.png"
            alt="profilr_pic"
            className="  flexitems-center   "
          />
        </div>
        <div className="flex-col ml-10 items-center w-3/4 ">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <div className="flex bg-default p-3 justify-between items-center">
            <div className="flex items-center  ">
              <FaRegComments size={20} />
              <div className="ml-5">
                <h5>Comments : 18</h5>
              </div>
            </div>
            <div className="flex items-center  ">
              <GrLike size={20} />
              <div>
                <h5 className="ml-5">Likes : 45</h5>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link to={Routes.COMMENTS.path}>
              <Button color="facebook">Add a coment</Button>
            </Link>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Postcomponent;
