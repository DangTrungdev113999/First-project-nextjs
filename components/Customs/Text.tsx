//@ts-nocheck
import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { useGlobalState } from "@/customHooks/useGlobalState";

const { Text: TextAntd, Title } = Typography;

const TextAntdStyled = styled(TextAntd)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
`;

const TitleStyled = styled(Title)`
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
`;

type PropsType = {
  title?: boolean;
  lever?: number;
  strong?: boolean;
  size?: number;
};

const Text: React.FC<PropsType> = ({
  title,
  lever,
  strong = false,
  children,
  size,
}) => {
  const [mode] = useGlobalState("mode");
  return (
    <>
      {!title ? (
        <TextAntdStyled mode={mode} strong={strong} size={size}>
          {children}
        </TextAntdStyled>
      ) : (
        <TitleStyled lever={lever}>{children}</TitleStyled>
      )}
    </>
  );
};

export default Text;
