import React from "react";
import usePosts from "../Hooks/usePosts";
import PostContent from "./PostContent";

function MediaContent() {
  const [posts] = usePosts([]);
  return (
    <div>
      <div className="flex justify-center py-4 md:py-10">
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Tamina</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Shila</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Farha</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Ayshu</p>
        </div>
        <div className="md:mx-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
          </div>
          <p className="text-center">Nilima</p>
        </div>
      </div>

      {/*---------------------------- post------------------------------  */}
      <h2 className="text-xl ml-4 font-semibold">All Post</h2>
      {posts.map((post) => (
        <PostContent post={post} key={post._id} />
      ))}
    </div>
  );
}

export default MediaContent;
