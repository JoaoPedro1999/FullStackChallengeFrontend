import Select, { StylesConfig } from "react-select";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.2rem 0;
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.border};
  gap: 3.2rem;
  width: 100%;

  h1 {
    font-size: 3.2rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const HeaderInputs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;

    border: 1px solid #000;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 0.8rem;

      input {
        border: none;
        padding: 0.8rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors.input};
        border: none;
        padding: 0.4rem;
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    gap: 1.6rem;
  }
`;

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.colors.input};
  width: 100%;
  max-width: 20rem;

  .react-select__control {
    background-color: white;
    box-shadow: none;
    border: 1px solid transparent;
    height: 6.4rem;
    width: 100%;

    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.colors.secundary};
    }

    svg {
      width: 28px;
      cursor: pointer;
    }
  }

  .react-select__control--menu-is-open {
    border-color: ${({ theme }) => theme.colors.secundary};
    background-color: transparent;
  }

  .react-select__clear-indicator {
    color: ${({ theme }) => theme.colors.input};
  }

  div {
    border-radius: 1.2rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const colourStyles: StylesConfig = {
  option: (styles) => {
    return {
      ...styles,
      width: "95%",
      borderRadius: `1.2rem`,
      margin: `1.2rem`,
      overflowX: "hidden",
    };
  },
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
    transition: "250ms",
  }),
};

export const IconContainer = styled.div`
  border: 0.2rem solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 3.2rem auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > button {
    border: none;
    height: 4.8rem;
    width: 14.4rem;
    color: ${({ theme }) => theme.colors.secundary};
    font-size: 1.8rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secundary};
    border-radius: 0.8rem;

    margin: 0 auto;
  }
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1024px) {
    &:nth-child(even) {
      flex-direction: column;
    }

    flex-direction: column;
  }
`;

export const ArticleImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  img {
    width: 390px;
  }
`;

export const ArticleContent = styled.div`
  width: 50%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  h3 {
    font-size: 2.8rem;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  p {
    text-align: justify;
  }

  div {
    button:first-child {
      border: none;
      height: 3.2rem;
      width: 8rem;
      color: ${({ theme }) => theme.colors.background};
      background: ${({ theme }) => theme.colors.secundary};
    }

    button {
      border: none;
      background: transparent;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
