import React, { useState } from "react";
import UserChatCard from "../../components/UserChatCard";
import UserCommentCard from "../../components/UserCommentCard";
import { iUser } from "../../interfaces";
import { MUsers } from "../../mock/user";

const Comments: React.FC = () => {
  return (
    <div className="flex flex-col pt-5">
      <div className="">
        <img src="/Assets/p2.jpg" alt="picture" />
      </div>
      <div className="flex item-center p-5">
        <div>
          <img
            src="/Assets/f324113672.jpg"
            alt=""
            className="rounded-full w-[30px] h-[30px]"
          />
        </div>
        <div className="ml-3 mt-2">
          <h4>stevens williams</h4>
        </div>
      </div>
      <div>
        <h3>Help me find Nathalia</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum
          deserunt voluptate at labore itaque incidunt asperiores animi possimus
          commodi quod, quas beatae laborum similique in provident magni
          voluptas eum.
        </p>
      </div>
      <hr className="mt-3" />
      <div className=" mt-5">
        <h4>Comments (50)</h4>
        <div className="flex item-center p-5">
          <div>
            <img
              src="/Assets/me.jpg"
              alt=""
              className="rounded-full w-[30px] h-[30px] mt-2"
            />
          </div>
          <div className="ml-3">
            <input
              placeholder="Your Comment here "
              className=" h-14 w-[600px] px-4"
            />
          </div>
        </div>
      </div>
      <div className=" px-8">
        <div>
          <UserCommentCard
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque impedit minus molestiae perferendis. Illo delectus rem ipsam distinctio placeat adipisci perferendis eius. Earum corrupti sequi itaque. Ipsa, aut magni?"
            image="/Assets/f324113672.jpg"
          />
        </div>
        <div>
          <UserCommentCard
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque impedit minus molestiae perferendis. Illo delectus rem ipsam distinctio placeat adipisci perferendis eius. Earum corrupti sequi itaque. Ipsa, aut magni?"
            image="/Assets/f324113672.jpg"
          />
        </div>
        <div>
          <UserCommentCard
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque impedit minus molestiae perferendis. Illo delectus rem ipsam distinctio placeat adipisci perferendis eius. Earum corrupti sequi itaque. Ipsa, aut magni?"
            image="/Assets/user.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
