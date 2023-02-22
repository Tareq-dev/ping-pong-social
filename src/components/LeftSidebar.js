import React from "react";
import { ImHome } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoFileSubmodule } from "react-icons/go";
import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className="hidden md:block">
      <h4 className="text-xl font-semibold text-gray-400 ml-8 pb-4 pt-14">
        Menu
      </h4>
      <ul className="text-xl">
        <Link to='/' className="flex items-center py-2">
          <ImHome className="mx-4" size={20} /> Home
        </Link>
        <Link to='/media' className="flex items-center py-2">
          <MdOutlinePostAdd className="mx-4" size={20} /> Post
        </Link>
        <Link to='*' className="flex items-center py-2">
          
          <MdMessage className="mx-4" size={20} /> Message
        </Link>
        <Link to='*' className="flex items-cente py-2">
          <FaUserFriends className="mx-4" size={20} /> Friends
        </Link>
        <Link to='*' className="flex items-center py-2">
          <RiVideoAddFill className="mx-4" size={20} /> Videos
        </Link>
        <Link to='*' className="flex items-center py-2">
          <HiOutlinePhotograph className="mx-4" size={20} /> Photos
        </Link>
        <Link to='*' className="flex items-center py-2">
          <GoFileSubmodule className="mx-4" size={20} /> File
        </Link>
      </ul>
    </div>
  );
}

export default LeftSidebar;
