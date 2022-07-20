import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col bg-slate-500 w-48 h-screen text-fuchsia-100">
        <div className="rounded">
          <img src="/Assets/me.jpg" alt="profilr_pic" className=" mt-2  " />
          <p>Joelle Lokengo Akilimali</p>
        </div>
        <div className="flex flex col my-20">
          <ul className=" my-8  cursor-pointer text-xl  ">
            <li>Actuality</li>
            <li>Profil</li>
            <li>Post</li>
            <li>chat</li>
          </ul>
        </div>
      </div>
      <div className=" ">
        <div className="   ">
          <p>hh</p>
          <p>sjhhs</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
