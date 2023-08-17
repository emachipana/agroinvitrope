import styled from "@emotion/styled";
import { colors, font } from "../../styles";

export const Container = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ isActive }) => isActive ? colors.gray.primary : colors.secondary};
  cursor: pointer;
  font-family: ${font.secondary};

  &:hover {
    color: ${({ isItem }) => isItem ? colors.gray.primary : ""};
  }
`;
