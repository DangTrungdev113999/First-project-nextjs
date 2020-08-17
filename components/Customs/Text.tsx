import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Text: TextAntd, Title } = Typography;

const TextAntdStyled = styled(TextAntd)`
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
`;

type PropsType = {
  mode: "light" | "dark";
  title?: boolean;
  lever?: number;
  strong?: boolean;
};

const Text: React.FC<PropsType> = ({
  title,
  mode = "light",
  lever,
  strong = false,
  children,
}) => {
  return (
    <>
      {!title ? (
        <TextAntdStyled mode={mode} strong={strong}>
          {children}
        </TextAntdStyled>
      ) : (
        <Title lever={lever} />
      )}
    </>
  );
};

export default Text;
