import fetchComments from "./Utils/fetchComments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewComment from "./NewComment";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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
      <NewComment article_id={article_id} setComments={setComments} />
      {comments.reverse().map((comment) => {
        return (
          <div className="comment-container" key={comment.comment_id}>
            <li className="comment-list">
              <div className="delete-button">
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    if (comment.author === "tickle122") {
                      axios
                        .delete(
                          `https://be-nc-news-d5oe.onrender.com/api/comments/${comment.comment_id}`
                        )
                        .then(() => {
                          fetchComments(article_id).then((fetchedComments) => {
                            setComments(fetchedComments);
                          });
                        });
                    } else {
                      alert("Cannot delete this comment");
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
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
