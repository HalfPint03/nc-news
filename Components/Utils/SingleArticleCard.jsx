function SingleArticleCard(article) {
  return (
    <>
      <div className="article-position">
        <div className="single-article">
          <h1>{article.title}</h1>
          <img src={article.article_img_url} width="50%" />
          <h2>{article.topic}</h2>
          <h4>{article.author}</h4>
          <p>{article.body}</p>
          <p>{article.created_at}</p>
        </div>
      </div>
    </>
  );
}
export default SingleArticleCard;
