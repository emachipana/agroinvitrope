import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.a`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  transition: ease-in .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, .2);
  }
`;

export const Name = styled.h3`
  font-size: 18px;
  color: ${colors.secondary};
  font-weight: 700;
  margin-bottom: 10px;
`;
