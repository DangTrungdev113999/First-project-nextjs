import React from "react";
import { UserDetailInfo } from "@/components/UserDetailInfo";
import { UserPosts } from "@/components/UserPosts";

const UserDetail: React.FC = () => {
  return (
    <div className="container">
      <UserDetailInfo />
      <UserPosts />
    </div>
  );
};

export default UserDetail;
