import React, { Fragment } from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoLocationSharp, IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { Input } from "semantic-ui-react";
const SecuredHeader: React.FC = () => {
  return (
    <div className=" p-2 bg-black opacity-70 text-white flex items-center justify-between">
      <Fragment>
        <div className="flex items-center mx-3">
          <div></div>
        </div>
        <div
          className=" mt-3 p-3 mx-3 rounded-lg w-[750px]
        "
        >
          <Input
            icon="search"
            placeholder="make a quick research "
            style={{ backgroundColor: "transparent" }}
            fluid
          />
        </div>
      </Fragment>
      <Fragment>
        <div className="flex items-center mr-10">
          <IoNotificationsOutline size={40} />
        </div>
      </Fragment>
    </div>
  );
};

export default SecuredHeader;
