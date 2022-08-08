import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.2rem 0;
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.border};
  gap: 3.2rem;

  h1 {
    font-size: 3.2rem;
  }
`;

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
`;

export const ArticleImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
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

  button {
    border: none;
    height: 3.2rem;
    width: 8rem;
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.secundary};
  }
`;
