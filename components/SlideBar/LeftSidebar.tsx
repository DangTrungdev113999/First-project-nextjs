import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Button, Space, Menu } from "antd";
import Link from "next/link";
import { useGlobalState } from "@/customHooks/useGlobalState";

const { Text, Link: LinkAnt } = Typography;

type categoryType = {
  key: string;
  text: string;
};

type PropsType = {
  categories?: categoryType[];
};

const LeftSidebar: FC<PropsType> = ({ categories }) => {
  const [token] = useGlobalState("token");
  return (
    <aside>
      <Menu style={{ marginTop: "60px" }} theme="light" mode="inline">
        {categories.map((item: any) => (
          <Menu.Item key={item.id}>
            <Text strong>{item.text}</Text>
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
};

export default LeftSidebar;
