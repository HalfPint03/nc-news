import formatDate from "./formatDate";
import Comments from "../Comments";
import Votes from "../Votes";

function SingleArticleCard(article) {
  const comments = Comments(article.article_id);
  return (
    <>
      <div className="article-position">
        <div className="single-article">
          <h1>{article.title}</h1>
          <img src={article.article_img_url} alt={`${article.title} image`} width="50%" />
          <h2>{article.topic}</h2>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <p className="article-date">{formatDate(article.created_at)}</p>
          <Votes article={article}/>
        </div>
      </div>
      <h2 className="comment-header">Comments</h2>
      {comments.map((comment) => {
        return (
          <div className="comment-container" key={comment.comment_id}>
            <li className="comment-list">
              <h2>{comment.author}</h2>
              <h3>{comment.body}</h3>
            </li>
          </div>
        );
      })}
    </>
  );
}
export default SingleArticleCard;
