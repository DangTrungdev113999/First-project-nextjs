import React from "react";
import PostDetailContent from "./PostDetailContent";
import PostCommentForm from "./PostCommentForm";
import PostCommentList from "./PostCommentList";

const PostDetail: React.FC = () => {
  return (
    <div className="ass1-section__list">
      <PostDetailContent />
      <PostCommentForm />
      <PostCommentList />
    </div>
  );
};

export default PostDetail;
