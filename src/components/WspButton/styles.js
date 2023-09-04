import styled from "@emotion/styled";

export const Container = styled.a`
  width: 58px;
  height: 58px;
  position: fixed;
  bottom: 25px;
  left: 25px;
  border-radius: 50%;
  background-color: #25D366;
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: center;
  color: white;
  transition: .2s ease-in;
  z-index: 10;
  cursor: pointer;
  font-size: 2.2rem;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, .4);

  &:hover {
    transform: scale(1.05);
  }
`;
