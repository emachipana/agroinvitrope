import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  background-color: ${colors.primary};
  color: white;
  font-weight: 700;
  cursor: pointer;
  align-self: start;
  transition: .2s ease-in;
  font-size: 1rem;

  &:hover {
    transform: scale(1.06);
  }

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
