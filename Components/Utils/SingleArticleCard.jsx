import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import formatDate from "./formatDate";
import Comments from "../Comments";

function SingleArticleCard(article) {
  const comments = Comments(article.article_id);
  return (
    <>
      <div className="article-position">
        <div className="single-article">
          <h1>{article.title}</h1>
          <img src={article.article_img_url} width="50%" />
          <h2>{article.topic}</h2>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <p className="article-date">{formatDate(article.created_at)}</p>
        </div>
      </div>
      <div className="article-buttons">
        <h2 className="comment-header">Comments</h2>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment-container">
            <li key={comment.comment_id} className="comment-list">
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
