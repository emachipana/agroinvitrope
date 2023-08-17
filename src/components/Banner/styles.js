import styled from "@emotion/styled";
import { font } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  padding: 1rem;
  position: absolute;
  width: 100%;
  z-index: 2;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .2);
`;

export const Text = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  font-family: ${font.secondary};
  color: rgb(255, 255, 255);
  text-align: center;
  width: 40vw;

  @media screen and (max-width: 700px) {
    font-size: 2.2rem;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    width: 100%;
  }
`;
