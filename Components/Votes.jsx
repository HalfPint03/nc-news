import { useState } from "react";
import { useParams } from "react-router-dom";
import patchArticleVotes from "./Utils/patchArticleVotes";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Votes({ article }) {
  const [incdVotes, setIncdVotes] = useState(0);
  const [decdVotes, setDecdVotes] = useState(0);
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedNegative, setIsClickedNegative] = useState(false)
  const { article_id } = useParams();

  function incVotes() {
    setIncdVotes((currVotes) => {
      if (!isClicked) setIsClicked(true)
      setIsClickedNegative(false)
      return currVotes + 1;
    });
    patchArticleVotes(article.article_id, { inc_votes: 1 }).catch(() => {
      setIncdVotes((currVotes) => {
        alert('OFFLINE Cannot update votes')
        return currVotes - 1;
      });
    });
  }
  function decVotes() {
    setDecdVotes((currVotes) => {
      if (!isClickedNegative) setIsClickedNegative(true)
        setIsClicked(false)
      return currVotes - 1;
    });
    patchArticleVotes(article.article_id, { inc_votes: -1 }).catch(() => {
      setDecdVotes((currVotes) => {
        return currVotes + 1;
      });
    });
  }
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
  return (
    <div>
      <h2>Votes: {article.votes + incdVotes + decdVotes}</h2>
      <div className="article-position">
      <Stack spacing={2} direction="row">
        <ThemeProvider theme={theme}>
          <Button
          onClick={incVotes}
            className="vote-buttons"
            variant="contained"
            size="large"
            disableElevation
            disabled = {isClicked}
          >
            +
          </Button>
          <Button
          onClick={decVotes}
            className="vote-buttons"
            variant="contained"
            size="large"
            disableElevation
            disabled = {isClickedNegative}
          >
            -
          </Button>
        </ThemeProvider>
      </Stack>
      </div>
    </div>
  );
}

export default Votes;
