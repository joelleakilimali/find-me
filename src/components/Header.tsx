import React from "react";

interface Props {
  visible: boolean;
}

const Header: React.FC<Props> = ({ visible }) => {
  return (
    <div className="flex px-20 py-5   justify-between item-center bg-[#342F72]  text-fuchsia-50  ">
      <div>
        <h1>Find Me</h1>
      </div>
      <div>{visible && <h4 className=""> Sign in</h4>}</div>
    </div>
  );
};

export default Header;
