import styled from "@emotion/styled";
import { colors, font } from "../../styles";

export const Line = styled.hr`
  margin: 2rem auto;
  width: 80%;
`;

export const Container = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const Section = styled.section`
  width: 80%;
  padding: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${({ direction }) => direction};
  ${({ direction }) => direction === "column"
    ?
      "width: 30vw;"
    :
      ""
  }
  gap: ${({ direction }) => direction === "column" ? 0.5 : 2}rem;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  height: 100%;
  width: 280px;
  cursor: pointer;
  transition: .3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: ${({ size }) => size ? size : "2.5rem"};
  font-family: ${font.secondary};
  color: ${colors.primary};
  font-weight: 900;
  text-align: ${({ alignment }) => alignment ? alignment : "center"};
`;

export const Text = styled.p`
  text-align: start;
  font-size: 15px;
  font-weight: 700;
  color: ${colors.gray.secondary};
`;

export const Docs = styled.div`
  margin: auto;
  width: 90%;
  min-height: 500px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
