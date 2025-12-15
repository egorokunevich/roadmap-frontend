import ArticleBlock from '../../components/common/ArticleBlock/ArticleBlock';
import PageContent from '../../components/common/PageContent/PageContent';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <PageContent>
        <ArticleBlock>
          <h1>О проекте</h1>
          <p>
            Проект в разработке. Целью является освоить разработку приложения,
            включающего в себя frontend, backend и БД.
          </p>
          <p>
            Backend-часть написана с помощью Express.js и размещена на
            бесплатном хостинге Render. В случае отсутствия частых запросов,
            сервер уходит в спящий режим. Это влечёт за собой необходимость
            ожидания сервера (около 1 минуты) при открытии приложения. Общение с
            frontend реализовано посредством REST API.
          </p>
          <p>Frontend-часть написана на React + Vite и размещена на Netlify.</p>
        </ArticleBlock>
      </PageContent>
    </>
  );
};

export default HomePage;
