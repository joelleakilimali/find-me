import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Divider, Form, Icon } from "semantic-ui-react";

import { Routes } from "../../routes";
import { Context } from "../../services/context";

const Singin: React.FC = () => {
  const { Login, isLoading, userInfo, setUserinfo } = useContext(Context);

  return (
    <div className="flex flex-col min-h-screen justify-between">
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
              <Form loading={isLoading}>
                <Form.Input
                  onChange={(e) =>
                    setUserinfo({ ...userInfo, email: e.target.value })
                  }
                  fluid
                  placeholder="Enter Email"
                  className="m-10 text-cyan-900"
                />
                <Form.Input
                  onChange={(e: any) =>
                    setUserinfo({ ...userInfo, password: e.target.value })
                  }
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
                <Form.Button color="facebook" onClick={Login}>
                  Sign in
                </Form.Button>

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
    </div>
  );
};

export default Singin;
