import { PostItem } from "../Postitem";
import { Button } from "antd";

const PostListItem = () => {
  return (
    <div className="ass1-section__list">
      <PostItem />
      <PostItem />
      <PostItem />
      <Button type="primary" size="large">
        Xem thêm
      </Button>
    </div>
  );
};

export default PostListItem;
