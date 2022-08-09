import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { LoaderComponent, NotificationCard } from "../components";
import { BASE_URL } from "../Config";
import { FaCheckCircle } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { Routes } from "../routes";

const Activation: React.FC = () => {
  let { token }: any = useParams();
  const history = useHistory();

  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    verifytoken();
  }, []);

  const verifytoken = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/auth/activation/${token}`)
      .then((res) => {
        setMessage(res?.data?.message);
        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          history.replace(Routes.SIGNIN.path);
        }, 10000);
      })
      .catch((e) => {
        setMessage(e?.response?.data?.message);
        setIsLoading(false);
        setSuccess(false);
        console.log(e);
      });
  };
  const resendMail = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/auth/resend-activation-mail/${token}`)
      .then((res) => {
        setIsLoading(false);
        history.replace(Routes.HOME.path);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <NotificationCard
          text={message}
          success={success}
          onClick={resendMail}
          icon={
            success ? (
              <FaCheckCircle color="green" size={50} />
            ) : (
              <BiError color="red" size={50} />
            )
          }
        />
      )}
    </div>
  );
};

export default Activation;
