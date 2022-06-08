import ArticleCardGrid from "./ArticleCardGrid";

const RelatedArticles = ({ articles }) => {
  return (
    <>
      {articles.length > 0 &&
        <>
          <h2 className='text-center mt-5 mb-5 heading-lg'>Related articles</h2>
          <ArticleCardGrid articles={articles} prefixType/>
        </>
      }
    </>
  );
}

export default RelatedArticles;