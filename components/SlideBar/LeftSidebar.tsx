import React, { FC } from "react";
import { Menu, Divider } from "antd";
import Link from "next/link";
import { useGlobalState } from "@/customHooks/useGlobalState";
import styled from "styled-components";
import { Avatar } from "antd";
import { Text } from "../Customs";

const IconNav = styled(Avatar)`
  color: #f56a00;
  background-color: #fde3cf;
  margin-right: 10px;
`;

const MenuItemStyled = styled(Menu.Item)`
  &:hover {
    background: #f2f3f5;
  }
`;

const LeftSidebar: FC = () => {
  const [categories] = useGlobalState("categories");
  const [mode] = useGlobalState("mode");
  //TODO xem trong project mau thẻ link có bọc các thẻ khác không
  return (
    <aside>
      <Menu style={{ marginTop: "60px" }} theme={mode} mode="inline">
        {categories.map((item: any) => (
          <MenuItemStyled
            key={item.id}
            icon={<IconNav>{item.text.slice(0, 1)}</IconNav>}
          >
            <Link
              href="/posts/categories/[categoryId]"
              as={`/posts/categories/${item.id}`}
            >
              <a>
                <Text>{item.text}</Text>
              </a>
            </Link>
            <Divider />
          </MenuItemStyled>
        ))}
      </Menu>
    </aside>
  );
};

export default LeftSidebar;
