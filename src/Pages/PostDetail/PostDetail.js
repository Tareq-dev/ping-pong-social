import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";

function PostDetail() {
  const [profile] = useProfile([]);
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://ping-pong-social.onrender.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded border-2 p-4 h-80"
            alt="hero"
            src={posts.picture}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src={posts?.userPicture} alt="" />
              </div>
            </label>
            <div className="flex justify-center items-center ml-2 text-md">
              <p className="font-bold text-xl">
                {profile?.name || posts?.name}
              </p>
            </div>
          </div>
          <p className=" leading-relaxed">Reaction - {posts.love} ❤️</p>
          <p className="mb-4 leading-relaxed">
            {posts?.comments?.lenght} people comments in this post
          </p>
          <p className=" leading-relaxed">Caption :- </p>
          <p className="mb-8 leading-relaxed">{posts.content} </p>
        </div>
      </div>
    </section>
  );
}

export default PostDetail;
