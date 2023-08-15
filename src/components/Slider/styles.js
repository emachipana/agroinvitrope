import styled from "@emotion/styled";

export const Section = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  margin: auto;
  max-height: 86vh;
  overflow: hidden;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 65vh;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
