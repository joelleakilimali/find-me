import React, { useContext } from "react";
import { BiEdit, BiLogOutCircle } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { ImFeed } from "react-icons/im";

import { Link } from "react-router-dom";
import { Routes } from "../routes";
import { Context } from "../services/context";
import { iUser } from "../interfaces";

const Slidebar: React.FC = () => {
  const { getUserData, Logout, profile } = useContext(Context);
  const user: iUser = getUserData();
  const userData = profile ? profile : user;

  console.log(userData);

  return (
    <div className="h-screen sticky w-80 top-0 bg-black text-white ">
      <div className="img flex flex-col  items-center first-letter justify-center mt-8  ">
        {/* <Image avatar size="medium" src="/Assets/me.jpg" /> */}
        <img
          src="/Assets/me.jpg"
          alt=" profile pic"
          className="rounded-full w-[180px]"
        />
        <BiEdit size={30} />
        <h3>{`${userData?.firstName?.toLocaleUpperCase()} ${userData?.lastName?.toLocaleUpperCase()}`}</h3>
      </div>
      <div className="mt-3 ml-5 cursor-pointer text-xl">
        <ul>
          <li className="hover-big my-2 flex items-center py-2 ml-5">
            <ImFeed />
            <Link to={Routes.FEED.path} className="ml-3">
              Actuality
            </Link>
          </li>
          <li className="hover-big my-2 flex items-center py-2 ml-5">
            <GiPostStamp />
            <Link to={Routes.POST.path} className="ml-3">
              Post
            </Link>
          </li>
          <li className="hover-big my-2 flex items-center py-2 ml-5">
            <BsChatDots />
            <Link to={Routes.CHAT.path} className="ml-3">
              Chat
            </Link>
          </li>
          <li className="hover-big my-2 flex items-center py-2 ml-5">
            <IoSettingsOutline />
            <Link to={Routes.ABOUTME.path} className="ml-3">
              Settings
            </Link>
          </li>
          <li className="hover-big my-2 flex items-center py-2 ml-5">
            <BiLogOutCircle />
            <a>
              <button onClick={Logout} className="ml-3">
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
