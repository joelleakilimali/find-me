import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
import { IPost } from "../interfaces";

const Postcomponent: React.FC<IPost> = ({ id, image, description, title }) => {
  const history = useHistory();
  return (
    <div className="mx-5">
      <div className=" card h-auto  flex-row w-full justify-between ">
        <div className="w-3/4">
          <img
            src={image ? image.path : undefined}
            alt="profilr_pic"
            className="flexitems-center object-cover w-[500px] h-[250px] cursor-pointer"
            onClick={() => {
              history.push(`/app/feed/${id}`);
            }}
          />
        </div>
        <div className="flex-col ml-10 items-center w-3/4 ">
          <h2
            className="cursor-pointer"
            onClick={() => {
              history.push(`/app/feed/${id}`);
            }}
          >
            {title}
          </h2>
          <p>
            {description.length > 300
              ? description.substring(0, 200) + " ..."
              : description}
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
            <Link to={`/app/feed/${id}`}>
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
