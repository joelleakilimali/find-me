import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Form, Icon } from "semantic-ui-react";
import { Notifications } from "../../components";
import { BASE_URL } from "../../Config";
import { IRegistration } from "../../interfaces";
import { Routes } from "../../routes";

const Registration: React.FC = () => {
  const data: IRegistration = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createUser = async () => {
    console.log(body);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/auth/register`, body)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((e) => {
        console.log(e?.response?.data);
        setIsLoading(false);
        Notifications("error", e?.response?.data?.message, 5000, "top-right");
      });
  };

  const [body, setBody] = useState<IRegistration>(data);

  return (
    <div className="bg-default flex justify-between items-center px-52 h-screen">
      <div className="">
        <img src="/Assets/logo.gif" alt="" />
      </div>
      <div className="card w-[70%] h-[500px]">
        <Form loading={isLoading}>
          <Form.Group widths={2}>
            <Form.Input
              onChange={(e) => {
                setBody({ ...body, firstName: e.target.value });
              }}
              label="First name"
              placeholder="First name"
              type="text"
            />
            <Form.Input
              onChange={(e) => {
                setBody({ ...body, lastName: e.target.value });
              }}
              label="Last name"
              placeholder="Last name"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              onChange={(e) => {
                setBody({ ...body, email: e.target.value });
              }}
              label="Email address"
              placeholder="Email address"
              type="email"
              width="16"
            />
          </Form.Group>

          <Form.Group widths={2}>
            <Form.Input
              onChange={(e) => {
                setBody({ ...body, password: e.target.value });
              }}
              label="Password"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              label="Confirm password"
              placeholder="Confirm password"
              type="password"
            />
          </Form.Group>
          <div className="flex justify-between my-5">
            <p>
              Do you have an account?{" "}
              <Link to={Routes.SIGNIN.path}>Sign in</Link>
            </p>
          </div>

          <Form.Button color="facebook" onClick={createUser}>
            Create account{" "}
          </Form.Button>
          <Divider horizontal>Or</Divider>
          <Form.Button fluid icon labelPosition="left" color="google plus">
            <Icon name="google" />
            Sign in with Google
          </Form.Button>
          <Form.Button fluid icon labelPosition="left" color="facebook">
            <Icon name="facebook f" />
            Sign in with Facebook
          </Form.Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
