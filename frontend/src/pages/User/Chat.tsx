import React, { useState } from "react";
import { Form, Icon, Input } from "semantic-ui-react";
import UserChatCard from "../../components/UserChatCard";
import { iUser } from "../../interfaces";
import { MUsers } from "../../mock/user";

const Chat: React.FC = () => {
  const [items, setItems] = useState<iUser[]>(MUsers);

  return (
    <div className="flex  bg-white h-[75%] w-full m-0 p-0">
      <div className="flex flex-col bg-white w-[30%] border-r-2 ">
        <div className="h-full flex flex-col  ">
          <div className=" mt-3 bg-default p-3 mx-3 rounded-lg">
            <Input
              icon="search"
              placeholder="make a quick research or start a new chat"
              iconPosition="left"
              fluid
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="m-3 overflow-scroll overflow-x-hidden h-full whitespace-nowrap scroll-smooth ">
            {items.map((item, index) => (
              <UserChatCard
                key={item.id}
                firstName={item.firstName}
                lastName={item.firstName}
                img={item.img}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100%] flex flex-col w-[70%] px-2">
        <div>Message</div>
        <div className="mt-auto bottom-20">
          <Input fluid placeholder="Type your message" icon="send" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
