import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Button, Space, Menu } from "antd";
import Link from "next/link";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { Text } from "../Customs";

const { Link: LinkAnt } = Typography;

type categoryType = {
  key: string;
  text: string;
};

type PropsType = {
  categories?: categoryType[];
};

const LeftSidebar: FC<PropsType> = ({ categories }) => {
  const [token] = useGlobalState("token");
  const [mode] = useGlobalState("mode");
  return (
    <aside>
      <Menu style={{ marginTop: "60px" }} theme={mode} mode="inline">
        {categories.map((item: any) => (
          <Menu.Item key={item.id}>
            <Text mode={mode}>{item.text}</Text>
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
};

export default LeftSidebar;
