import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  border: 0.2rem solid ${(props) => props.theme.colors.background};
  padding: 1.6rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.input};
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.8rem;
  }
  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border: 0.2rem solid #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme.colors.text};
      border: 0.2rem solid ${(props) => props.theme.colors.text};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.text};
    `}
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.colors.input};
    &::placeholder {
      color: ${(props) => props.theme.colors.input};
    }
  }
  svg {
    margin-left: 1.6rem;
  }
  @media (min-width: 1024px) {
    margin-right: 0.8rem;
    & + div {
      margin-top: 0;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
