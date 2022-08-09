/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { BiRocket, BiSearch } from "react-icons/bi";
import {
  Header,
  HeaderInputs,
  IconContainer,
  Container,
  Article,
  ArticleImage,
  ArticleContent,
} from "@/styles/home";
import api from "@/services/api";
import Select from "react-select";
import {
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";

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

const options = [
  { value: "DESC", label: "Mais Recente" },
  { value: "ASC", label: "Mais Antigos" },
];

const Home: NextPage<HomeProps> = ({ articlesServer }) => {
  const [articles, setArticles] = useState(articlesServer);
  const [page, setPage] = useState(1);
  const [orderArticle, setOrderArticle] = useState("DESC");
  const [inputSearch, setInputSearch] = useState("");

  const { push } = useRouter();

  const handleGetMoreArticles = useCallback(async () => {
    const { data } = await api.get<ArticlesProps[]>(
      `articles?page=${String(page)}&orderBy=${orderArticle}`
    );

    setArticles((prevArticles) => [...prevArticles, ...data]);
    setPage((prevPage) => prevPage + 1);
  }, [page, orderArticle]);

  useEffect(() => {
    api
      .get<ArticlesProps[]>(`articles?page=0&orderBy=${orderArticle}`)
      .then((response) => setArticles(response.data));
  }, [orderArticle]);

  const handleSearchArticle = useCallback(
    async (e: any) => {
      e.preventDefault();

      const { data } = await api.get<ArticlesProps[]>(
        `articles?keyword=${inputSearch}`
      );

      setArticles(data);

      setInputSearch("");
    },
    [inputSearch]
  );

  const handleOpenArticlePage = useCallback(
    (page: string) => {
      push(page);
    },
    [push]
  );

  return (
    <>
      <Head>
        <title>Space Flight News 🚀</title>
      </Head>
      <Header>
        <HeaderInputs>
          <div>
            <form onSubmit={handleSearchArticle}>
              <input
                value={inputSearch}
                placeholder={"Pesquisar"}
                onChange={(e) => setInputSearch(e.currentTarget.value)}
              />
              <button type="submit">
                <BiSearch size={18} color="#fff" />
              </button>
            </form>
          </div>
          <Select
            options={options}
            value={options.find((option) => option.value === orderArticle)}
            onChange={(option) => {
              setOrderArticle(option?.value || "");
            }}
            classNamePrefix={"react-select"}
          />
        </HeaderInputs>

        <IconContainer>
          <BiRocket size={80} />
        </IconContainer>

        <h1>Space Flight News</h1>
      </Header>
      <Container>
        {articles.map((article) => (
          <Article key={article.id}>
            <ArticleImage>
              <img src={article.imageUrl} alt="Image" />
            </ArticleImage>
            <ArticleContent>
              <h3>{article.title}</h3>
              <div>
                <span>{article.publishedAtFormatted}</span>
                <span>{article.newsSite}</span>
              </div>
              <p>{article.summary}</p>
              <button
                type="button"
                onClick={() => handleOpenArticlePage(article.url)}
              >
                Ver mais
              </button>
            </ArticleContent>
          </Article>
        ))}

        {inputSearch.length !== 0 ? null : (
          <button type="button" onClick={() => handleGetMoreArticles()}>
            Carregar Mais
          </button>
        )}
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
