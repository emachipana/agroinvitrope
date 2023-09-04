import styled from "@emotion/styled";
import { colors, font } from "../../styles";

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: ${({ alignX }) => alignX || "start"};
  gap: 2rem;
  justify-content: ${({ align }) => align || "space-between"};
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  width: ${({ width }) => width || 460}px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-family: ${font.secondary};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  text-align: ${({ align }) => align || "center"};
  font-weight: 900;
  color: ${colors.primary};
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  text-align: justify;
  padding: 0 1rem;
  font-family: ${font.primary};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;
  transition: .2s linear;

  &:hover {
    transform: scale(1.04);
  }
`;
