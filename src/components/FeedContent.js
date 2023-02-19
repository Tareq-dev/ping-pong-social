import React, { useEffect, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { ImHeart } from "react-icons/im";
import { FaRegCommentDots } from "react-icons/fa";

function FeedContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const sortedPosts = posts.slice().sort((a, b) => b.love - a.love);

  return (
    <div>
      <div className="flex justify-center">
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
      </div>
      <form className="border p-6 my-6 rounded-md shadow-sm">
        <textarea
          placeholder="What's on your mind?"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        <div className="flex w-full justify-center items-center">
          <label className="label w-1/3">
            <input type="file" required />
            <div className="flex px-4">
              <FcAddImage size={24} className="mr-2" />
              Add Photo
            </div>
          </label>
          <input
            className="w-2/3 border font-bold bg-green-300 h-9 rounded-md"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {/*---------------------------- post------------------------------  */}
      {sortedPosts.map((post) => (
        <div
          post={post}
          key={post._id}
          className="border shadow-sm p-2 rounded-md my-4"
        >
          <div className="flex">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <div className="flex justify-center items-center ml-2 text-md">
              <p className="font-bold text-xl">{post.name}</p>
            </div>
          </div>
          <p className="text-md text-justify px-5 py-1">{post.content}</p>
          <img className="px-4 py-2" src={post.picture} alt="image" />
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

export default FeedContent;
