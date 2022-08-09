import React from "react";
import { IconType } from "react-icons";

interface Props {
  text: string;
  icon: any;
  success: boolean;
  onClick: any;
}

const NotificationCard: React.FC<Props> = ({
  text,
  icon,
  success,
  onClick,
}) => {
  return (
    <div className="w-[40%] h-[40%] p-3 shadow-md flex flex-col items-center justify-center">
      <div>
        <p
          className=" text-center text-lg"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
      <div className="mt-10">{icon}</div>
      {!success && (
        <button onClick={onClick} className="mt-5 p-5 bg-default rounded-md ">
          Click here to receive another activation email
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
