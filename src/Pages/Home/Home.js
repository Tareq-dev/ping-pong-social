import React from "react";
import FeedContent from "../../components/FeedContent";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar";
import LeftSidebar from './../../components/LeftSidebar';


function Home() {
  return (
    <div className="md:px-8">
      <Navbar />
      <div className="w-full flex">
        <div className="w-1/5">
          <RightSidebar />
        </div>
        <div className="w-3/5 px-4 py-8">
          <FeedContent />
        </div>
        <div className="w-1/5">
         <LeftSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
