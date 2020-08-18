import React from "react";
import { useRouter } from "next/router";
import { TypeUser } from "@/constants/typeData";
import { useGlobalState } from "@/customHooks/useGlobalState";
import Link from "next/link";

type PropsType = {
  userDetailInfo: TypeUser;
};

const UserDetailInfo: React.FC<PropsType> = ({ userDetailInfo }) => {
  const router = useRouter();

  const [currentUser] = useGlobalState("currentUser");

  return (
    <div className="">
      <div className="ass1-head-user__content">
        <div className="ass1-head-user__image">
          <a href="#">
            <img src="/images/cat-1634369_1920.jpg" alt="" />
          </a>
        </div>
        <div className="ass1-head-user__info">
          <div className="ass1-head-user__info-head">
            <div className="ass1-head-user__name">
              <span>{userDetailInfo.fullname}</span>
              {userDetailInfo.status === "1" && (
                <i>
                  <img src="/fonts/emotion/svg/Verified.svg" alt="" />
                </i>
              )}
            </div>
            <div className="w-100" />
            {currentUser.USERID !== userDetailInfo.USERID && (
              <a href="#" className="ass1-head-user__btn-follow ass1-btn">
                Theo dõi
              </a>
            )}
            {currentUser.USERID === userDetailInfo.USERID && (
              <>
                <Link href="/users/changePassword">
                  <a
                    href="thay-doi-password.html"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Đổi mật khẩu
                  </a>
                </Link>
                <Link href="/users/profile">
                  <a
                    href="profile.html"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Profile
                  </a>
                </Link>
              </>
            )}

            {/* <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
          </div>
          <div className="ass1-head-user__info-statistic">
            <div className="ass1-btn-icon">
              <i className="icon-Post" />
              <span>Bài viết: {userDetailInfo.profileviews}</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Followers" />
              <span>Theo dõi: {userDetailInfo.youviewed}</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Following" />
              <span>Đang theo dõi: {userDetailInfo.yourviewed}</span>
            </div>
            {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
          </div>
          <p>{userDetailInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailInfo;
