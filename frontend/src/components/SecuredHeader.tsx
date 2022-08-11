import React, { Fragment } from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoLocationSharp, IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { Input } from "semantic-ui-react";
import { FaUserCircle } from "react-icons/fa";
const SecuredHeader: React.FC = () => {
  return (
    <div className="p-4 bg-black opacity-70 text-white flex items-center justify-between">
      <div className="rounded-lg w-2/4">
        <Input
          icon="search"
          placeholder="make a quick research "
          style={{ backgroundColor: "transparent" }}
          fluid
          size="small"
        />
      </div>
      <div className="flex items-center">
        <IoNotificationsOutline size={25} />
        <FaUserCircle size={25} className="ml-5" />
      </div>
    </div>
  );
};

export default SecuredHeader;
