import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Divider, Form, Icon, Input } from "semantic-ui-react";
import { Footer, Header } from "../../components";
import { ISignin } from "../../interfaces";
import { Routes } from "../../routes";

const Singin: React.FC = () => {
  const info: ISignin = {
    email: "",
    password: "",
  };
  const [userInfo, setUserinfo] = useState<ISignin>(info);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header visible={false} />
      <div className=" h-[85vh] bg-[#F5F5F5] ">
        <div className="flex justify-between items-center px-72 pt-10">
          <div>
            <img src="/Assets/logo.gif" alt="logo" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="card w-96 h-[450px] ">
              <div className=" flex mb-10 justify-center items-center">
                <Icon name="user" size="huge"></Icon>
              </div>
              <Form>
                <Form.Input
                  onChange={(e) => {
                    setUserinfo({ ...userInfo, email: e.target.value });
                  }}
                  fluid
                  placeholder="Enter Email"
                  className="m-10 text-cyan-900"
                />
                <Form.Input
                  onchange={(e: any) => {
                    setUserinfo({ ...userInfo, password: e.target.value });
                  }}
                  placeholder=" Enter password"
                  className="m-10"
                  type="password"
                />
                <div className=" flex justify-between">
                  <p>
                    Don't you have an account?{" "}
                    <Link to={Routes.REGISTRATION.path}> Create Account</Link>
                  </p>
                  <p className=" ml-5">
                    <Link to={Routes.FORGETPASSWORD.path}>
                      Forget password ?
                    </Link>
                  </p>
                </div>
                <Form.Button color="facebook"> Sign in </Form.Button>

                <Divider horizontal>Or</Divider>
                <Form.Button
                  fluid
                  icon
                  labelPosition="left"
                  color="google plus"
                >
                  <Icon name="google"></Icon>
                  Sign in with Google
                </Form.Button>
                <Form.Button fluid icon labelPosition="left" color="facebook">
                  <Icon name="facebook f"></Icon>
                  Sign in with Facebook
                </Form.Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singin;
