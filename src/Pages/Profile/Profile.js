import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

import MainProfile from "./MainProfile";

function Profile() {
  return (
    <div className="md:px-8">
      <div className="w-full flex">
        <div className="md:w-1/5">
          <LeftSidebar />
        </div>
        <div className="w-full md:w-3/5 px-4 py-8">
          <MainProfile />
        </div>
        <div className="md:w-1/5">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
