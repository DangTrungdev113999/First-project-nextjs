import React from "react";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { Checkbox, Button, Typography } from "antd";
import styled from "styled-components";

const WrapperCheckbox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 10px;
  > label:first-child {
    margin: 0 0 0 8px;
  }
`;

const { Text } = Typography;

type PropsTypes = {
  category: number[];
  handleCreatePost: () => void;
  handleSetPost: (key: string, value: number[]) => void;
};

const PostCreateSidebar: React.FC<PropsTypes> = ({
  category,
  handleSetPost,
  handleCreatePost,
}) => {
  const [categories] = useGlobalState("categories");

  const handleChecked = (e: any) => {
    const values = [...category];
    if (e.target.checked) {
      values.push(e.target.value);
      handleSetPost("category", values);
    } else {
      const index = values.indexOf(e.target.value);
      handleSetPost("category", [
        ...values.slice(0, index),
        ...values.slice(index + 1),
      ]);
    }
  };

  return (
    <>
      <Button
        type="primary"
        style={{ width: "100%" }}
        onClick={handleCreatePost}
      >
        Đăng bài
      </Button>
      <br />
      <br />
      <WrapperCheckbox>
        {categories.map((item) => (
          <Checkbox
            value={item.id}
            key={item.id}
            checked={category.map((i) => +i).indexOf(+item.id) !== -1}
            onChange={handleChecked}
          >
            <Text strong>{item.text}</Text>
          </Checkbox>
        ))}
      </WrapperCheckbox>
    </>
  );
};

export default PostCreateSidebar;
