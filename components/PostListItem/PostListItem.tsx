import React, { FC } from "react";
import { Button } from "antd";

import { PostDataType } from "pages";
import { PostItem } from "../Postitem";

type PropsType = {
  listPosts: PostDataType[];
};

const PostListItem: FC<PropsType> = ({ listPosts }) => {
  return (
    <>
      <PostItem />
      <PostItem />
      <PostItem />
      <Button type="primary" size="large">
        Xem thêm
      </Button>
    </>
  );
};

export default PostListItem;
