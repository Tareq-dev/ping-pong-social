import React, { useEffect, useState } from "react";
import { ImHeart } from "react-icons/im";
import { FaRegCommentDots } from "react-icons/fa";
import useProfile from "../Hooks/useProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.auth";
import { useNavigate } from "react-router-dom";

function PostContent(props) {
  const [profile] = useProfile([]);
  const [user] = useAuthState(auth);
  const [isLoved, setIsLoved] = useState(true);
  const [loveCount, setLovedCount] = useState(props.post.love);

  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/details/${id}`);
  };
  const handleLoveClick = (id) => {
    setIsLoved(!isLoved);
    const reactPost = props.post._id === id;
    if (reactPost) {
      if (isLoved) {
        setLovedCount(loveCount + 1);
        const reactedPostData = {
          love: loveCount + 1,
        };
        fetch(`https://ping-pong-social.onrender.com/posts/${props.post._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(reactedPostData),
        })
          .then((res) => res.json())
          .then((data) => {});
      } else {
        setLovedCount(loveCount - 1);
        const reactedPostData = {
          love: loveCount - 1,
        };
        fetch(`https://ping-pong-social.onrender.com/posts/${props.post._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(reactedPostData),
        })
          .then((res) => res.json())
          .then((data) => {});
      }
    }
  };

  return (
    <div className="border shadow-sm p-2 rounded-md my-4">
      <div className="flex">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-12 rounded-full">
            <img src={props.post?.userPicture} alt="" />
          </div>
        </label>
        <div className="flex justify-center items-center ml-2 text-md">
          <p className="font-bold text-xl">
            {profile?.name || props.post?.name}
          </p>
        </div>
      </div>
      <p className="text-md text-justify px-5 py-1">
        {props.post?.content?.slice(0, 100)}...
      </p>
      <div className="flex justify-center">
        <img
          className="px-4 py-2 h-80 md:h-96 w-100"
          src={props.post?.picture}
          alt=""
        />
      </div>
      <div className="flex py-2 justify-between md:px-14">
        <div className="flex md:px-4 justify-center items-center">
          <button onClick={() => handleLoveClick(props.post?._id)}>
            <ImHeart
              size={24}
              className={!isLoved ? "text-red-500" : "text-gray-500"}
            />
          </button>
          <span className="md:ml-4 ml-2 text-sm">{loveCount} People</span>
        </div>
        <div className="flex justify-center items-center">
          <FaRegCommentDots size={24} />
          <span className="md:ml-4 ml-1 text-sm">
            {props.post?.comments?.length} Comment
          </span>
        </div>
        <button className="" onClick={() => navigateToDetails(props.post._id)}>
          Details
        </button>
      </div>
    </div>
  );
}

export default PostContent;
