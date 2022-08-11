import React, { Fragment } from "react";
import { formateDate } from "../constants";
import { IComment } from "../interfaces";

const UserCommentCard: React.FC<IComment> = ({
  content,
  id,
  user,
  createdAt,
  post,
}) => {
  return (
    <Fragment>
      <div className="flex justify-start items-start m-3">
        <img
          src="/Assets/user.png"
          alt="user_img"
          className="rounded-full w-7 h-7 mr-1"
        />
        <div className="flex flex-col">
          <h6 className="font-semibold">
            {user?.firstName?.concat(" ").concat(user?.lastName as string)}
          </h6>
          <p className="mb-0">{content}</p>
          <span className=" mt-0 text-sm float-right text-blue-500 mt-2">
            {formateDate(createdAt as string)}
          </span>
        </div>
      </div>

      <hr />
    </Fragment>
  );
};

export default UserCommentCard;
