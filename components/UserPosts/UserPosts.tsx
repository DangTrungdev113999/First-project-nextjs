import React from "react";
import { PostDataType } from "pages";
import { PostItem } from "../Postitem";
import Masonry from "react-masonry-css";

import "./userPosts.scss";

type PropsType = {
  userPosts: PostDataType[];
};

const UserPosts: React.FC<PropsType> = ({ userPosts }) => {
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
