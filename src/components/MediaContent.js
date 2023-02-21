import React from "react";
import { ImHeart } from "react-icons/im";
import { FaRegCommentDots } from "react-icons/fa";
import usePosts from "../Hooks/usePosts";

function MediaContent() {
  const [posts] = usePosts([]);
  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Tamina</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Shila</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Farha</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Ayshu</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Nilima</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Anima</p>
        </div>
      </div>

      {/*---------------------------- post------------------------------  */}
      <h2 className="text-xl ml-4 font-semibold">All Post</h2>
      {posts.map((post) => (
        <div
          post={post}
          key={post._id}
          className="border shadow-sm p-2 rounded-md my-4"
        >
          <div className="flex">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
              </div>
            </label>
            <div className="flex justify-center items-center ml-2 text-md">
              <p className="font-bold text-xl">{post.name}</p>
            </div>
          </div>
          <p className="text-md text-justify px-5 py-1">{post.content}</p>
          <img className="px-4 py-2" src={post.picture} alt="" />
          <div className="flex py-4 justify-between px-14">
            <div className="flex">
              <ImHeart size={24} />
              <span className="ml-4">{post.love} People</span>
            </div>
            <div className="flex">
              <FaRegCommentDots size={24} />
              <span className="ml-4">{post.comments.length} Comment</span>
            </div>
            <p>Details</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MediaContent;
