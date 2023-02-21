import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import MediaContent from "../../components/MediaContent";
import RightSidebar from "../../components/RightSidebar";

function Media() {
  return (
    <div className="md:px-8">
      <div className="w-full flex">
        <div className="w-1/5">
          <RightSidebar />
        </div>
        <div className="w-3/5 px-4 py-8">
          <MediaContent />
        </div>
        <div className="w-1/5">
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
}

export default Media;
