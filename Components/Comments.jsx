import fetchComments from "./Utils/fetchComments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewComment from "./NewComment";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
    });
  }, []);
  return (
    <>
    <NewComment article_id={article_id} setComments={setComments}/>
      {comments.reverse().map((comment) => {
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
export default Comments;
