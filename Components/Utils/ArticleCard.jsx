function ArticleCard(articles) {
    return (
      <>
        {articles.map((article) => {
          return (
            <div className="article-container">
                <li key={article.article_id} className="article-list">
                <img src={article.article_img_url}/>
                  <h2>{article.title}</h2>
                  <h3>{article.topic}</h3>
                  <p>{article.author}</p>
                  <p>Votes: {article.votes} Comments: {article.comment_count}</p>
                </li>
                </div>
          );
        })}
      </>
    );
  }
  export default ArticleCard;
  