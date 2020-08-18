import React from "react";
import { PostItem } from "../Postitem";
import Masonry from "react-masonry-css";

import { PostDataType } from "@/constants/typeData";
import "@/assets/css/global.scss";
type PropsType = {
  userPosts: PostDataType[];
};

const UserPosts: React.FC<PropsType> = ({ userPosts }) => {
  if (!userPosts.length) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        Chưa có bài đăng nào
      </div>
    );
  }
  return (
    <div>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {userPosts.map((post) => (
          <PostItem key={post.PID} post={post} />
        ))}
      </Masonry>
    </div>
  );
};

export default UserPosts;
