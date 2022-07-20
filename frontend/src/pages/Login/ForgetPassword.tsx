import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Forget, Header, NewPassword } from "../../components";

const ForgetPasswordPage: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = () => setVisible(!visible);

  return (
    <div>
      <Header visible={false} />
      <div className=" items-center justify-center flex content-center pt-10   ">
        {visible ? (
          <NewPassword onClick={handleClick} />
        ) : (
          <Forget handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
