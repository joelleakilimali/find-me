import React from "react";

const NodataIndication: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center  p-10 mt-16 border-none">
      <img src="/Assets/notfound.svg" alt="no-data " width={250} />
      <div>
        <p className=" text-2xl  text-black pt-10">No post found </p>
      </div>
    </div>
  );
};

export default NodataIndication;
