import axios from "axios";
import React, { Fragment, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Form } from "semantic-ui-react";
import { Notifications } from "../../components";
import Loader from "../../components/Loader";
import { BASE_URL } from "../../Config";
import { iUser } from "../../interfaces";
import { Context } from "../../services/context";

const ABOUTMe: React.FC = () => {
  const { getUserData, setUserData, setProfile } = useContext(Context);
  const userData: iUser = getUserData();
  const [body, setBody] = useState<iUser>(userData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [value, setValue] = useState(
    userData?.gender ? userData.gender : undefined
  );

  const update = async () => {
    setIsLoading(true);
    await axios
      .put(`${BASE_URL}/users/updateUser/${userData.id}`, body)
      .then((res) => {
        console.log(res);
        setBody(res?.data?.data);
        setProfile(res?.data?.data);
        setUserData(res?.data?.data);

        setIsLoading(false);
        Notifications("success", res?.data?.message, 5000, "top-right");
      })
      .catch((e) => {
        console.log(e?.response?.data);
        setIsLoading(false);
      });
  };

  const handleChange = (e: any, { value }: any) => {
    setValue(value);
    console.log(value);
    setBody({ ...body, gender: value });
  };

  const ressetPassword = async () => {
    await axios
      .put(`${BASE_URL}/users/updateUser/${userData.id}`, body)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  };

  return (
    <Fragment>
      {isLoading && <Loader />}
      <div className="flex flex-col py-3">
        <div>
          <h1>ABOUT ME</h1>
          <hr />
        </div>
        <div>
          <div className="flex flex-col mt-3">
            <Form>
              <Form.Input
                placeholder="  Enter the last name"
                type="text"
                width={5}
                defaultValue={userData?.lastName}
                onChange={(e) => {
                  setBody({ ...body, lastName: e.target.value });
                }}
              />
              <Form.Input
                placeholder="Enter your first name"
                width={5}
                defaultValue={userData?.firstName}
                onChange={(e) => {
                  setBody({ ...body, firstName: e.target.value });
                }}
              />
              <Form.Input
                placeholder="Enter your Email"
                width={5}
                defaultValue={userData?.email}
                onChange={(e) => {
                  setBody({ ...body, email: e.target.value });
                }}
              />
              <Form.Input
                placeholder="Enter your Phone number"
                width={5}
                defaultValue={userData?.phoneNumber}
                onChange={(e) => {
                  setBody({ ...body, phoneNumber: e.target.value });
                }}
              />
              <Form.Input
                placeholder="Enter your Physical Adress"
                width={5}
                defaultValue={userData?.address}
                onChange={(e) => {
                  setBody({ ...body, address: e.target.value });
                }}
              />
              <Form.Group>
                <Form.Radio
                  label="Male"
                  name="male"
                  value="Male"
                  checked={value === "Male"}
                  onChange={handleChange}
                  className="p-5"
                />
                <Form.Radio
                  label="Female"
                  name="female"
                  value="Female"
                  checked={value === "Female"}
                  onChange={handleChange}
                  className="p-5"
                />
                <Form.Radio
                  label="Other"
                  name="other"
                  value="Other"
                  checked={value === "Other"}
                  onChange={handleChange}
                  className="p-5"
                />
              </Form.Group>

              <Form.Button color="facebook" onClick={update} className="py-5">
                UPDATE
              </Form.Button>
              <hr />
              <h3>Resset Password</h3>
              <Form.Input
                placeholder="password"
                width={5}
                type="password"
                onChange={(e) => {
                  setBody({ password: e.target.value });
                }}
              />
              <Form.Input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => {
                  setBody({ password: e.target.value });
                }}
                width={5}
              />
              <Form.Button
                color="facebook"
                onClick={ressetPassword}
                className="py-5"
              >
                RESSET
              </Form.Button>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ABOUTMe;
