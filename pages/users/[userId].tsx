import React, { useEffect } from "react";
import { UserDetailInfo } from "@/components/UserDetailInfo";
import { UserPosts } from "@/components/UserPosts";
import { NextPage, NextPageContext } from "next";
import { PostDataType } from "pages";
import { TypeUser } from "@/customHooks/useGlobalState";
import { getTokenInSsrAndCsr } from "@/utils/index";
import { getUserById } from "@/modules/user/api";
import { fetchPostsByUserId } from "@/modules/posts/api";
import { useRouter } from "next/router";
import useAuthenticated from "@/customHooks/useAutthenticated";
import { message } from "antd";

type PropsType = {
  userDetailInfo: TypeUser;
  userPosts: PostDataType[];
};

const UserDetail: NextPage<PropsType> = ({ userDetailInfo, userPosts }) => {
  useAuthenticated("");
  const router = useRouter();
  useEffect(() => {
    if (!userDetailInfo) {
      router.push("/");
      message.error("Không tìm thấy user");
    }
  }, []);
  if (!userDetailInfo) return <div>Không có dữ liệu</div>;
  return (
    <div className="container">
      <UserDetailInfo userDetailInfo={userDetailInfo} />
      <UserPosts userPosts={userPosts} />
    </div>
  );
};

UserDetail.getInitialProps = async (context: NextPageContext) => {
  const userId = context.query.userId;
  const [token] = getTokenInSsrAndCsr(context);

  const currentUserPr = getUserById(userId as string);
  const userPostsPr = fetchPostsByUserId({ userid: userId }, token);

  const [currentUserRes, UserPostsRes] = await Promise.all([
    currentUserPr,
    userPostsPr,
  ]);

  return {
    userDetailInfo: currentUserRes.user || null,
    userPosts: UserPostsRes.posts || [],
  };
};

export default UserDetail;
