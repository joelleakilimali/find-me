import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Routes } from "../routes";

const Home: React.FC = () => {
  return (
    <div className="flex bg-[#F5F5F5] h-screen items-center px-10">
      <div className="flex">
        <div className="w-96">
          <img
            src="./assets/background.png"
            alt="image_bg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="ml-56  flex-col text-4xl mr-3 ">
          <p>
            <h1>Donload Find me App</h1>
            <h2>Easy to use </h2>
          </p>
          <p>Find your lovely one by one post</p>
          <Link to={Routes.SIGNIN.path}>
            <Button color="facebook">Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
