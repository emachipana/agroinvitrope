import styled from "@emotion/styled";

export const Section = styled.div`
  position: relative;
  display: flex;
  width: ${({ isBanner, width }) => isBanner ? width : 90}%;
  margin: ${({ isBanner }) => isBanner ? "2rem auto" : "auto"};
  max-height: ${({ maxHeight }) => maxHeight}vh;
  overflow: hidden;
  margin-bottom: 4rem;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : 0}rem;

  @media screen and (max-width: 700px) {
    width: ${({ width }) => width}%;
    height: ${({ height }) => height}vh;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
