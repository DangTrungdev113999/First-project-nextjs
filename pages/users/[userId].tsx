import React from "react";
import { UserDetailInfo } from "@/components/UserDetailInfo";
import { UserPosts } from "@/components/UserPosts";

const UserDetail = () => {
  return (
    <div className="container">
      <UserDetailInfo />
      <UserPosts />
    </div>
  );
};

export default UserDetail;
