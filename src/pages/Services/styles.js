import styled from "@emotion/styled";
import { colors, font } from "../../styles";

export const Title = styled.h1`
  font-size: 2rem;
  font-family: ${font.secondary};
  color: ${colors.primary};
  font-weight: 900;
  text-align: start;
`;

export const Container = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1240px) {
    justify-content: center;
  }
`;
