import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, .2);
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: rgb(245, 245, 245);
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const LabelStyle = css`
  font-weight: 700;
  color: ${colors.secondary};
`;

export const InputStyle = css`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.secondary};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0px 0px;
  }
`;

export const ButtonStyle = css`
  align-self: start;
  font-weight: 600;
`;
