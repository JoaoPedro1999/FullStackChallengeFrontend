/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BiRocket } from "react-icons/bi";
import {
  Header,
  IconContainer,
  Container,
  Article,
  ArticleImage,
  ArticleContent,
} from "@/styles/home";
import api from "@/services/api";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Select from "react-select";
import { useCallback, useState } from "react";

type ArticlesProps = {
  id: string;
  title: string;
  featured: boolean;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  publishedAtFormatted: string;
  events: Array<{
    provider: string;
  }>;
  launches: Array<{
    provider: string;
  }>;
};

type HomeProps = {
  articlesServer: ArticlesProps[];
};

const Home: NextPage<HomeProps> = ({ articlesServer }) => {
  const [articles, setArticles] = useState(articlesServer);
  const [page, setPage] = useState(1);
  const [orderArticle, setOrderArticle] = useState("DESC");

  const handleGetMoreArticles = useCallback(async () => {
    const { data } = await api.get<ArticlesProps[]>(
      `articles?page=${String(page)}&orderBy=${orderArticle}`
    );

    setArticles((prevArticles) => [...prevArticles, ...data]);
    setPage((prevPage) => prevPage + 1);
  }, [page, orderArticle]);

  return (
    <>
      <Head>
        <title>Space Flight News 🚀</title>
      </Head>
      <Header>
        <div>
          <input type="Text" />
          <button type="button"></button>
        </div>

        <IconContainer>
          <BiRocket size={80} />
        </IconContainer>

        <h1>Space Flight News</h1>
      </Header>
      <Container>
        {articles.map((article) => (
          <Article key={article.id}>
            <ArticleImage>
              <img src={article.imageUrl} alt="Image" width={500} />
            </ArticleImage>
            <ArticleContent>
              <h3>{article.title}</h3>
              <div>
                <span>{article.publishedAtFormatted}</span>
                <span>{article.newsSite}</span>
              </div>
              <p>{article.summary}</p>
              <button type="button">Ver mais</button>
            </ArticleContent>
          </Article>
        ))}

        <button type="button" onClick={() => handleGetMoreArticles()}>
          Carregar Mais
        </button>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data: articlesServer } = await api.get<ArticlesProps[]>(
    "articles?page=0&orderBy=DESC"
  );

  return {
    props: {
      articlesServer,
    },
  };
};

export default Home;
