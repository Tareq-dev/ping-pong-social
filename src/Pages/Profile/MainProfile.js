import React from "react";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import usePosts from "../../Hooks/usePosts";
import useProfile from "../../Hooks/useProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.auth";
import Post from "../../components/Post";
import PostContent from "../../components/PostContent";

function MainProfile() {
  const [posts] = usePosts([]);
  const [updateProfile] = useProfile([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  const myPost = posts.filter((post) => post.email === email);
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
            <img src={updateProfile?.picture || user?.photoURL} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="py-8 mt-8 ml-4">
          <h2 className="text-2xl font-bold">{updateProfile.name}</h2>
          <p>{email}</p>
          {updateProfile?.course &&
          updateProfile?.subject &&
          updateProfile?.university ? (
            <p className="text-md font-semibold">
              {updateProfile?.course} in {updateProfile?.subject} at{" "}
              {updateProfile?.university}
            </p>
          ) : (
            <p className="text-sm font-semibold pt-4 text-gray-400">
              Please Add your Qualifications
            </p>
          )}
          {updateProfile?.address ? (
            <p className="text-sm font-semibold">
              Live in {updateProfile?.address}
            </p>
          ) : (
            <p className="text-sm font-semibold text-gray-400">
              Add Your Addess
            </p>
          )}
        </div>
        <Link to="/edit" className="flex justify-center items-center mr-8">
          <CiEdit className="border-2 p-1" size={30} />
          <span className="ml-2">Edit Profile</span>
        </Link>
      </div>
      <Post />
      <h2 className="text-xl ml-4 font-semibold">Your Post</h2>
      {myPost.map((post) => (
        <PostContent post={post} key={post._id} />
      ))}
    </div>
  );
}

export default MainProfile;
