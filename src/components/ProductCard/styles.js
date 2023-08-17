import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  height: 420px;
  border-radius: 1rem;
  background-color: rgb(245, 245, 245);
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, .2);
  cursor: pointer;
  transition: .2s linear;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 48%;
  object-fit: contain;
`;

export const Section = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`;

export const Text = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 13.8px;
  font-weight: 700;
  color: ${colors.secondary};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
