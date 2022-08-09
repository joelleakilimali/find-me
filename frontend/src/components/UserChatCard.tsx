import React, { Fragment } from "react";
import { iUser } from "../interfaces";

const UserChatCard: React.FC<iUser> = ({ id, firstName, lastName, img }) => {
  return (
    <Fragment>
      <div className="flex justify-start items-center  m-3">
        <div>
          <img src={img} alt="user_img" className="rounded-full w-10" />
        </div>
        <div>
          <h5>{`${firstName} ${lastName}`} </h5>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default UserChatCard;
