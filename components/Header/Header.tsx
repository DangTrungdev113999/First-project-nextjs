import { FC, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import JsCookie from "js-cookie";

import { Menu, Input, Typography, Button, Dropdown, Avatar, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useGlobalState } from "@/customHooks/useGlobalState";

import "./Header.scss";

const { SubMenu } = Menu;
const { Title } = Typography;
const { Search } = Input;

const Header: FC = () => {
  const [currentUser, setCurrentUser] = useGlobalState("currentUser");
  const [, setToken] = useGlobalState("token");
  const [modal, contextHolder] = Modal.useModal();
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {}

  const onHandeSearch = (query: string): void => {
    if (!query) return;
    router.push(`/posts/search?query=${query}`);
  };

  const handleLogout = (): void => {
    modal.confirm({
      title: "Bạn có chắc chắn muốn logout ?",
      onOk: () => {
        JsCookie.remove("token");
        setToken("");
        setCurrentUser(null);
        router.push("/login");
      },
    });
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="header-wrapper">
      <Link href="/">
        <div className="header-logo">DangTrungDev</div>
      </Link>
      <Menu theme="dark" mode="horizontal">
        <SubMenu key="sub1" title="Danh mục">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <Menu.Item key="search" className="header-search">
          <Search
            size="large"
            className="header-search__input"
            placeholder="Tim kiếm"
            onSearch={onHandeSearch}
          />
        </Menu.Item>
      </Menu>
      <Button type="primary" size="large" className="header-upload">
        <UploadOutlined />
        Upload
      </Button>
      <div className="header-tail">
        {currentUser?.fullname ? (
          <Dropdown overlay={menu}>
            <div className="header-user">
              <Avatar
                size={40}
                src={currentUser.profilepicture || "/images/avatar-02.png"}
              />
              <Title level={4} className="header-user__name">
                {currentUser.fullname}
              </Title>
            </div>
          </Dropdown>
        ) : (
          <Link href="/login">
            <Button type="dashed" size="large" className="header-tail__login">
              login
            </Button>
          </Link>
        )}
        ,
      </div>
      {contextHolder}
    </div>
  );
};

export default Header;
