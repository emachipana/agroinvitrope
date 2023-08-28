import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.button`
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
  background-color: ${colors.primary};
  color: white;
  font-weight: 700;
  cursor: pointer;
  align-self: ${({ alignment }) => alignment ? alignment : "start"};
  transition: .2s ease-in;
  font-size: ${({ fontSize }) => fontSize ? fontSize : 1}rem;

  &:hover {
    transform: scale(1.06);
  }

  @media screen and (max-width: 700px) {
    font-size: ${({ minFontSize }) => minFontSize ? minFontSize : 14}px;
  }
`;
