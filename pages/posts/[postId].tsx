import React from "react";
import { HomeSideBar } from "@/components/HomeSlideBar";
import PostDetailContent from "@/components/PostDetail";

const PostDetail1: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostDetailContent />
        </div>
        <div className="col-lg-4">
          <HomeSideBar />
        </div>
      </div>
    </div>
  );
};

export default PostDetail1;
