import React from "react";
import usePosts from "./../Hooks/usePosts";
import Post from "./Post";
import PostContent from "./PostContent";

function FeedContent() {
  const [posts] = usePosts([]);

  const sortedPosts = posts.slice().sort((a, b) => b.love - a.love);

  return (
    <div>
      <div className="flex justify-center pb-4 md:py-10">
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className=" md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Tamina</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Shila</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Farha</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Ayshu</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">Nilima</p>
        </div>
      </div>
      <Post />
      {/*---------------------------- post------------------------------  */}
      <h2 className="text-xl ml-4 font-semibold">Most Popular Post</h2>
      {sortedPosts.map((post) => (
        <PostContent post={post} key={post._id} />
      ))}
    </div>
  );
}

export default FeedContent;
