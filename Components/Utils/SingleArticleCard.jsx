import formatDate from "./formatDate";
import Comments from "../Comments";
import Votes from "../Votes";
import NewComment from "../NewComment";

function SingleArticleCard(article) {
  return (
    <>
      <div className="article-position">
        <div className="single-article">
          <h1>{article.title}</h1>
          <img
            src={article.article_img_url}
            alt={`${article.title} image`}
            width="50%"
          />
          <h2>{article.topic}</h2>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <p className="article-date">{formatDate(article.created_at)}</p>
          <Votes article={article} />
        </div>
      </div>
      <h2 className="comment-header">Comments</h2>
      <Comments/>
    </>
  );
}
export default SingleArticleCard;
