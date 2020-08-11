import { FC } from "react";
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
        <SubMenu key="sub3" title="Funny">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
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
    // <header>
    //   <div className="ass1-header">
    //     <div className="container">
    //       <Link href="/">
    //         <a className="ass1-logo">Dang trung dev</a>
    //       </Link>
    //       <nav>
    //         <ul className="ass1-header__menu">
    //           <li>
    //             <a href="#">Danh mục</a>
    //             <div className="ass1-header__nav" style={{ display: "none" }}>
    //               <div className="container">
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Funny</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Animals</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Anime &amp; Mâng</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Awesome</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Basketball</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Car</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Comic</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Cosplay</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Countryballs</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Classical Art Memes</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Girl</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">History</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">K-POP</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">V-POP</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Pokémon</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">School</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Star war</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Coder</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Travel</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Sport</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="ass1-header__menu-transition" />
    //             </div>
    //           </li>
    //           <li className="active">
    //             <a href="index.html">Hot</a>
    //             <div className="ass1-header__nav" style={{ display: "none" }}>
    //               <div className="container">
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Funny</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Animals</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Anime &amp; Mâng</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Awesome</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Basketball</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Car</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Comic</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Cosplay</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Countryballs</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Classical Art Memes</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">Girl</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">History</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">K-POP</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">V-POP</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Pokémon</a>
    //                   </li>
    //                 </ul>
    //                 <ul>
    //                   <li>
    //                     <a href="index.html">School</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Star war</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Coder</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Travel</a>
    //                   </li>
    //                   <li>
    //                     <a href="index.html">Sport</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="ass1-header__menu-transition" />
    //             </div>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className="ass1-header__search">
    //         <form action="#">
    //           <label>
    //             <input
    //               type="search"
    //               name="search-text"
    //               className="form-control"
    //               placeholder="Nhập từ khóa ..."
    //             />
    //             <i className="icon-Search" />
    //           </label>
    //         </form>
    //       </div>
    //       <Link href="/login">
    //         <a className="ass1-header__btn-upload ass1-btn">
    //           <i className="icon-Upvote" /> Upload
    //         </a>
    //       </Link>
    //       {currentUser ? (
    //         <div className="wrapper-user">
    //           <a className="user-header">
    //             <span className="avatar">
    //               <img
    //                 src={currentUser.profilepicture || "/images/avatar-02.png"}
    //               />
    //             </span>
    //             <span className="email">{currentUser.fullname}</span>
    //           </a>
    //           <div className="logout" onClick={handleLogout}>
    //             logout
    //           </div>
    //         </div>
    //       ) : (
    //         <Link href="/login">
    //           <a
    //             href="dang-nhap.html"
    //             className="ass1-header__btn-upload ass1-btn"
    //           >
    //             Login
    //           </a>
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
