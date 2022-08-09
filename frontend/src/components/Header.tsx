import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../routes";

interface Props {
  visible: boolean;
}

const Header: React.FC<Props> = ({ visible }) => {
  return (
    <div className="flex px-20 py-4   justify-between item-center bg-[#342F72]  text-fuchsia-50  ">
      <div>
        <h1>Find Me</h1>
      </div>
      <div>
        {visible && (
          <Link to={Routes.REGISTRATION.path}>
            <h4 className="text-white"> Create Account </h4>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
