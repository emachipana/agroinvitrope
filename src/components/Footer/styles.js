import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 2rem;
  align-items: center;
  background-color: ${colors.secondary};
  color: #F5F5F5;
`;

export const Section = styled.section`
  width: ${({ isComplete }) => isComplete ? "100%" : ""};
  height: ${({ isComplete }) => isComplete ? "100%" : ""};
  flex-wrap: wrap;
  gap: ${({ isComplete }) => isComplete ? "1rem" : 0};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Text = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  padding: 3px 0;
  font-size: 15px;
  font-weight: 600;
  text-decoration: ${({ isLink }) => isLink ? "underline white" : "none"};
  cursor: ${({ isLink }) => isLink ? "pointer" : "inherit"};
`;
