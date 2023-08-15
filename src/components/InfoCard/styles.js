import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20vw;
  height: max-content;
  background-color: white;
  opacity: .97;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media screen and (max-width: 1120px) {
    width: 40vw;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: ${colors.gray.secondary};
  align-self: start;

  @media screen and (max-width: 950px) {
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Info = styled.h3`
  font-size: 10px;
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 900;
  align-self: start;

  @media screen and (max-width: 950px) {
    font-size: 9px;
  }
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.gray.secondary};

  @media screen and (max-width: 950px) {
    font-size: 13px;
  }
`;
