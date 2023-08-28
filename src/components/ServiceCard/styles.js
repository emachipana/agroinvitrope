import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 340px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const ImageSection = styled.section`
  width: 100%;
  height: 170px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: .3s ease-in;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .35);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  z-index: 2;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  top: 0;
`;

export const Text = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: white;
`;

export const DetailContainer = styled.div`
  width: 100%
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
`;
  
export const DetailTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  color: ${colors.gray.secondary};
`;

export const DetailText = styled.li`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.secondary};
`;
