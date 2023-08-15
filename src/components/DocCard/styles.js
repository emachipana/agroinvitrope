import styled from "@emotion/styled";

export const Container = styled.div`
  cursor: pointer;
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  transition: .3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${({ isLogo }) => isLogo ? "" : "380px"};
  border-radius: ${({ isLogo }) => isLogo ? 0 : "1rem"};
`;

export const DocContainer = styled.div`
  width: 100%;
  height: 380px;
`;

export const SoonContainer = styled.div`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-color: rgb(108, 122, 137);
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(108, 122, 137, 0.9);
  }
`;
