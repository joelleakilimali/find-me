import React, { Fragment } from "react";
import { CommentElement } from "../interfaces";

const UserCommentCard: React.FC<CommentElement> = ({ image, comment }) => {
  return (
    <Fragment>
      <div className="flex justify-start items-center  m-3">
        <div>
          <img src={image} alt="user_img" className="rounded-full w-10 h-10" />
        </div>
        <div className="ml-3  w-[500px]">
          <p>{comment}</p>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default UserCommentCard;
