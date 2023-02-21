import React, { useEffect, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { ImHeart } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePosts from "../../Hooks/usePosts";

function MainProfile() {
  const [posts] = usePosts([]);
  const [updateProfile, setUpdateProfile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => setUpdateProfile(data));
  }, []);

  console.log(updateProfile);
  return (
    <div>
      <div className="bg-base-100 shadow-xl relative">
        <img
          className="h-[225px] w-full rounded-md"
          src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
          alt=""
        />
        <div className="avatar online absolute top-40 left-8">
          <div className="w-28 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="py-8 mt-8 ml-4">
          <h2 className="text-2xl font-bold">Ayshu Farha</h2>
          <p>tareque@gmail.com</p>
          <p className="text-md font-semibold">
            BSc in Zoolozy at National University
          </p>
          <p className="text-sm font-semibold">
            Live in Chattogram, bangladesh
          </p>
        </div>
        <Link to="/edit" className="flex justify-center items-center mr-8">
          <CiEdit className="border-2 p-1" size={30} />
          <span className="ml-2">Edit Profile</span>
        </Link>
      </div>
      <form className="border p-6 my-2 rounded-md shadow-sm">
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
      <h2 className="text-xl ml-4 font-semibold">Your Post</h2>
      {posts.map((post) => (
        <div
          post={post}
          key={post._id}
          className="border shadow-sm p-2 rounded-md my-4"
        >
          <div className="flex">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
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

export default MainProfile;
