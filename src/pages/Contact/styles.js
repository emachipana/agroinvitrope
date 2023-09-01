import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  width: ${({ width }) => width ? width : "100"}%;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2rem;
  gap: 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1220px) {
    width: 100%;
    justify-content: ${({ content }) => content ? content : "start"};
    padding: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: center;
`;

export const InfoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${colors.gray.secondary};
  font-size: 19px;

  @media screen and (max-width: 700px) {
    font-size: 17px;
    gap: 5px;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 19px;
  font-weight: 900;

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 0.5rem;

  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const DetailText = styled.p`
  margin: 0;
  padding: 0;
  color: ${colors.secondary};
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const IconStyle = {
  fontSize: "22px",
  marginTop: "-0.5rem"
}

export const Section = styled.section`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: start;

  @media screen and (max-width: 920px) {
    align-items: center;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`;
