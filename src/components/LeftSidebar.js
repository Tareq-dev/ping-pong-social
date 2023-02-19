import React from "react";
import { ImHome } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoFileSubmodule } from "react-icons/go";

function LeftSidebar() {
  return (
    <div>
      <h4 className="text-xl font-semibold text-gray-400 ml-8 pb-4 pt-14">
        Menu
      </h4>
      <ul className="text-xl">
        <li className="flex items-center py-2">
          {" "}
          <ImHome className="mx-4" size={20} /> Home
        </li>
        <li className="flex items-center py-2">
          <MdOutlinePostAdd className="mx-4" size={20} /> Post
        </li>
        <li className="flex items-center py-2">
          {" "}
          <MdMessage className="mx-4" size={20} /> Message
        </li>
        <li className="flex items-cente py-2">
          <FaUserFriends className="mx-4" size={20} /> Friends
        </li>
        <li className="flex items-center py-2">
          <RiVideoAddFill className="mx-4" size={20} /> Videos
        </li>
        <li className="flex items-center py-2">
          <HiOutlinePhotograph className="mx-4" size={20} /> Photos
        </li>
        <li className="flex items-center py-2">
          <GoFileSubmodule className="mx-4" size={20} /> File
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;