import React from "react";

function RightSidebar() {
  return (
    <div className="hidden md:block">
      <h4 className="text-xl font-semibold text-gray-400 pb-4 pt-14">
        Suggested Group
      </h4>
      <div className="flex">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>
        </label>
        <div className="flex justify-center items-center ml-2 text-md">
          <p>Figma Comunity</p>
        </div>
        <div className="flex justify-center items-center ml-6 text-md">
          <button className="btn btn-xs btn-outline btn-info">Join</button>
        </div>
      </div>
      <div className="flex">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>
        </label>
        <div className="flex justify-center items-center ml-2 text-md">
          <p>Figma Comunity</p>
        </div>
        <div className="flex justify-center items-center ml-6 text-md">
          <button className="btn btn-xs btn-outline btn-info">Join</button>
        </div>
      </div>
      <h4 className="text-xl font-semibold text-gray-400 pb-4 pt-14">
        Suggested Pages
      </h4>
      <div className="flex">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>
        </label>
        <div className="flex justify-center items-center ml-2 text-md">
          <p>Figma Comunity</p>
        </div>
        <div className="flex justify-center items-center ml-4 text-md">
          <button className="btn btn-xs btn-outline btn-info">Follow</button>
        </div>
      </div>
      <div className="flex">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>
        </label>
        <div className="flex justify-center items-center ml-2 text-md">
          <p>Figma Comunity</p>
        </div>
        <div className="flex justify-center items-center ml-4 text-md">
          <button className="btn btn-xs btn-outline btn-info">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
