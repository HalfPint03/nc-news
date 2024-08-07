import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import postNewComment from "./Utils/postNewComment";
import { useParams } from "react-router-dom";
import { useState } from "react";
import fetchComments from "./Utils/fetchComments";

function NewComment({ setComments }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f8bbd0",
      },
      secondary: {
        main: "#ff80ab",
      },
    },
  });
  const { article_id } = useParams();
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleBody(event) {
    setBody(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true)
    postNewComment(article_id, body, "tickle122")
      .then(() => {
        setIsSubmitting(false)
        setBody("");
        return fetchComments(article_id);
      })
      .then((comments) => {
        setComments(comments);
      });
  }

  return (
    <>
      <div className="new-comment-box">
        <div className="new-comment-container">
          <h3>New Comment</h3>
          <h4>tickle122</h4>
          <form className="new-comment-form">
            <label>
              <input
                value={body}
                onChange={handleBody}
                className="new-comment-input"
                type="text"
                placeholder="Comment"
              ></input>
            </label>
            <Stack spacing={2} direction="column">
              <ThemeProvider theme={theme}>
                <Button
                  onClick={handleSubmit}
                  className="fancy-buttons"
                  variant="contained"
                  size="small"
                  disableElevation
                  disabled = {isSubmitting}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewComment;
