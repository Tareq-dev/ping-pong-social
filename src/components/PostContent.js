import React from "react";
import { ImHeart } from "react-icons/im";
import { FaRegCommentDots } from "react-icons/fa";
import useProfile from "../Hooks/useProfile";

function PostContent(props) {
  const [profile] = useProfile([]);
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
      <p className="text-md text-justify px-5 py-1">{props.post?.content}</p>
      <div className="flex justify-center">
      <img className="px-4 py-2 h-96 w-100" src={props.post?.picture} alt="" />
      </div>
      <div className="flex py-4 justify-between px-14">
        <div className="flex">
          <ImHeart size={24} />
          <span className="ml-4">{props.post?.love} People</span>
        </div>
        <div className="flex">
          <FaRegCommentDots size={24} />
          <span className="ml-4">{props.post?.comments?.length} Comment</span>
        </div>
        <p>Details</p>
      </div>
    </div>
  );
}

export default PostContent;
