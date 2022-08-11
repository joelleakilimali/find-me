import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserChatCard from "../../components/UserChatCard";
import UserCommentCard from "../../components/UserCommentCard";
import { BASE_URL } from "../../Config";
import { IComment, IPost, iUser } from "../../interfaces";
import { MUsers } from "../../mock/user";
import { TbSend } from "react-icons/tb";
import moment from "moment";
import { formateDate } from "../../constants";
import { Context } from "../../services/context";

export interface Comment {
  id?: string;
  user?: string;
  content: string;
  post?: string;
}

const FeedDetaill: React.FC = () => {
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>([]);
  const { id }: any = useParams();
  const [body, setBody] = useState<Comment>({ content: "", user: "" });
  const [newcomment, setNewcomment] = useState<string>("");

  const { getUserData } = useContext(Context);

  const user = getUserData();

  useEffect(() => {
    setBody({ ...body, user: user?.id });
    fetchPost();
    fetchComments(id);
  }, []);

  const fetchPost = async () => {
    await axios.get(`${BASE_URL}/posts/getPostById/${id}`).then((res) => {
      console.log(res?.data);
      setPost(res.data.message);
    });
  };

  const handleSendComment = async () => {
    await axios
      .post(`${BASE_URL}/comments/createcomment/${id}`, body)
      .then((res) => {
        fetchComments(id);
        setBody({ ...body, content: "" });
      });
  };

  const fetchComments = async (id: string) => {
    await axios
      .get(`${BASE_URL}/comments/findcommentOfPost/${id}`)
      .then((res) => {
        console.log("comments:");
        console.log(res?.data);
        setComments(res.data.data);
      });
  };

  return (
    <div className="flex flex-col pt-5">
      {post && (
        <>
          <div className="w-full">
            <img
              src={post?.image.path}
              alt="picture_post"
              className="object-cover w-full h-[350px]"
            />
          </div>
          <div className="p-5">
            <div className="flex item-center">
              <div>
                <img
                  src="/Assets/f324113672.jpg"
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="ml-3 mt-2">
                <h4 className="mb-0">{`${post?.user?.firstName} ${post?.user?.lastName}`}</h4>
                <span className="mt-0">
                  {formateDate(post?.createdAt as string)}
                </span>
              </div>
            </div>
            <div className="mt-5">
              <h3>{post?.title}</h3>
              <p>{post?.description}</p>
            </div>
            <hr className="mt-3" />
            <div className=" mt-5">
              <h4>Comments (50)</h4>
              <div className="flex item-center p-5">
                <div>
                  <img
                    src="/Assets/me.jpg"
                    alt=""
                    className="rounded-full w-[30px] h-[30px] mt-2"
                  />
                </div>
                <div className="ml-3 w-full">
                  <div className="flex rounded-md bg-white">
                    <textarea
                      rows={3}
                      placeholder="Your Comment here "
                      className="mx-3 w-full p-4 border-none focus:outline-none resize-none"
                      value={body.content}
                      onChange={(e) => {
                        setBody({ ...body, content: e.target.value });
                      }}
                    />
                    <button className="m-5" onClick={handleSendComment}>
                      <TbSend size={25} color="blue" />
                    </button>
                  </div>
                  <div className="">
                    <div>
                      {comments &&
                        comments.map((item, index) => (
                          <UserCommentCard
                            key={item.id}
                            content={item.content}
                            id={item.id}
                            user={item.user as any}
                            createdAt={item.createdAt}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedDetaill;
