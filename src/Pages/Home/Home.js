import React from "react";
import FeedContent from "../../components/FeedContent";
import RightSidebar from "../../components/RightSidebar";
import LeftSidebar from "./../../components/LeftSidebar";

function Home() {
  return (
    <div className="md:px-8">
      <div className="w-full flex">
        <div className="w-1/5">
          <RightSidebar />
        </div>
        <div className="w-full md:w-3/5 px-4 py-8">
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
