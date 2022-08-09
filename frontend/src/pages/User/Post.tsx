import React, { useContext, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button, Form } from "semantic-ui-react";
import { GiCancel } from "react-icons/gi";
import { FileWithPath, useDropzone } from "react-dropzone";
import axios from "axios";
import { BASE_URL } from "../../Config";
import { Context } from "../../services/context";
import { CommentElement, iUser } from "../../interfaces";
import { Notifications } from "../../components";

const Post: React.FC = () => {
  const data: CommentElement = {
    image: "",
    comment: "",
    description: "",
    title: "",
  };
  const [body, setBody] = useState<CommentElement>(data);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { getUserData } = useContext(Context);
  const userData: iUser = getUserData();

  const files = acceptedFiles.map((file: FileWithPath) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
    })
  );

  const makePost = async () => {
    console.log("hello");
    await axios
      .post(`${BASE_URL}/posts/createpost/${userData.id}`, body)
      .then((res) => {
        console.log(res);
        setBody({ description: "", title: "", image: "" });
      })
      .catch((e) => {
        console.log(e?.response?.data);

        Notifications("error", e?.response?.data?.message, 5000, "top-right");
      });
  };

  return (
    <div className="items-center justify-center p-4 ">
      <div>
        <h2>Create A Post</h2>
        <hr />
      </div>
      <div className="px-32">
        <div className="flex  items-center m-0  justify-between ">
          <div className=" cursor-pointer">
            <GiCancel size={20} color="gray" />
          </div>
        </div>
        {!files.length && (
          <div className="bg-white  my-5 ">
            <div
              {...getRootProps({
                className:
                  "p-5 text-center border-2 border-dashed border-[#eeeeee] rounded-md bg-gray text-black mb-5",
              })}
            >
              <input {...getInputProps()} />
              <p className=" h-[100%] bg-default p-14  text-2xl flex  flex-col items-center">
                Drag and drop the picture, or click to select files
                <BiImageAdd size={40} color="gray" />
              </p>
            </div>
          </div>
        )}
        {files.length > 0 && (
          <div className="bg-white border flex flex-col  items-center justify-center p-5 mb-4 rounded-md">
            {files.map((file, index) => (
              <div key={index}>
                <img src={file.preview} alt="" />
              </div>
            ))}
            <div className="mt-4">
              <Button color="red" fluid>
                Erase
              </Button>
            </div>
          </div>
        )}
        <div className="w-[100%] items-center justify-center ">
          <Form>
            <Form.Input
              placeholder="title...."
              width={"16"}
              onChange={(e) => {
                setBody({ ...body, title: e.target.value });
              }}
            ></Form.Input>
            <Form.TextArea
              placeholder="Description...."
              width={"16"}
              rows={5}
              onChange={(e) => {
                setBody({ ...body, description: e.target.value });
              }}
            ></Form.TextArea>
            <Form.Button color="facebook" onClick={makePost}>
              Make POST
            </Form.Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Post;
