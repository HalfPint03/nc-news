import { Link } from "react-router-dom";

function ArticleCard(articles) {
  return (
    <>
      {articles.map((article) => {
        const article_id = article.article_id;
        return (
          <div className="article-container" key={article.article_id}>
            <li className="article-list">
              <Link
                to={`/articles/${article_id}`}
              >
                <img src={article.article_img_url} alt={`${article.title} image`} className="articles-img"/>
                <h2>{article.title}</h2>
                <h3>{article.topic}</h3>
                <p>{article.author}</p>
                <p>
                  Votes: {article.votes} Comments: {article.comment_count}
                </p>
              </Link>
            </li>
          </div>
        );
      })}
    </>
  );
}
export default ArticleCard;
