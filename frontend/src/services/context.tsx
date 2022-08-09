import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Notifications } from "../components";
import { BASE_URL } from "../Config";
import { ISignin, iUser } from "../interfaces";
import { Routes } from "../routes";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<iUser>();
  const [userInfo, setUserinfo] = useState<ISignin>({
    email: "",
    password: "",
  });

  const history = useHistory();

  const setUserData = (data: object) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const getUserData = () => {
    const userData = localStorage.getItem("userData");
    const parsed = JSON.parse(userData as any);
    return parsed;
  };
  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const Login = async () => {
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/auth/login`, userInfo)
      .then((res) => {
        setIsLoading(false);
        setProfile(res?.data.find_user);
        setUserData(res?.data?.find_user);
        setToken(res?.data?.token);
        history.replace(Routes.PROFILE.path);
      })
      .catch((e) => {
        console.log(e?.response?.data);
        setIsLoading(false);
        Notifications("error", e?.response?.data?.message, 5000, "top-right");
      });
  };

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.replace(Routes.SIGNIN.path);
  };

  return (
    <Context.Provider
      value={{
        Login,
        setUserinfo,
        userInfo,
        isLoading,
        getUserData,
        getToken,
        setUserData,
        Logout,
        profile,
        setProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
