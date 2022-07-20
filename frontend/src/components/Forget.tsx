import React from "react";
import { Form } from "semantic-ui-react";

interface Props {
  handleClick: any;
}

const Forget: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className="card w-[400px]">
      <div className="mb-10 text-center">
        <h3>Find Me </h3>
        <h2>Forget Password</h2>
        <p> Enter your Email address to resset your password </p>
      </div>
      <Form>
        <Form.Input placeholder="Email address " />
        <Form.Button onClick={handleClick} floated="right" color="facebook">
          Suivant
        </Form.Button>
      </Form>
    </div>
  );
};

export default Forget;
