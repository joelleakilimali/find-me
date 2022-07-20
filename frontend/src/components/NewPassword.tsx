import React from "react";
import { Form } from "semantic-ui-react";
interface Props {
  onClick: any;
}
const NewPassword: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="card w-[400px]">
      <div className="mb-10 text-center">
        <h3>Find Me </h3>
        <h3>New Password</h3>
        <p> Enter your Email address to resset your password </p>
      </div>
      <Form>
        <Form.Input placeholder="New password " />
        <Form.Input placeholder="Confirm new password" />
        <Form.Button onClick={onClick} floated="right" color="facebook">
          Suivant
        </Form.Button>
      </Form>
    </div>
  );
};

export default NewPassword;
