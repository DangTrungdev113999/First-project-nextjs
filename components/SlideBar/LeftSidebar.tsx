import React, { FC } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { Text } from "../Customs";

const LeftSidebar: FC = () => {
  const [categories] = useGlobalState("categories");
  const [mode] = useGlobalState("mode");

  return (
    <aside>
      <Menu style={{ marginTop: "60px" }} theme={mode} mode="inline">
        {categories.map((item: any) => (
          <Menu.Item key={item.id}>
            {/* <Text mode={mode}> */}
            <Link
              href="/posts/categories/[categoryId]"
              as={`/posts/categories/${item.id}`}
            >
              <a>{item.text}</a>
            </Link>
            {/* </Text> */}
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
};

export default LeftSidebar;
