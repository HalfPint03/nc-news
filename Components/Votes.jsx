import { useState } from "react";
import { useParams } from "react-router-dom";
import patchArticleVotes from "./Utils/patchArticleVotes";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Votes({ article }) {
  const [incdVotes, setIncdVotes] = useState(0);
  const [decdVotes, setDecdVotes] = useState(0);
  const { article_id } = useParams();

  function incVotes() {
    setIncdVotes((currVotes) => {
      return currVotes + 1;
    });
    patchArticleVotes(article.article_id, { inc_votes: 1 }).catch(() => {
      setIncdVotes((currVotes) => {
        return currVotes - 1;
      });
    });
  }

  function decVotes() {
    setDecdVotes((currVotes) => {
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
      <Stack spacing={2} direction="row">
        <ThemeProvider theme={theme}>
          <Button
          onClick={incVotes}
            className="fancy-buttons"
            variant="contained"
            size="large"
            disableElevation
          >
            +
          </Button>
          <Button
          onClick={decVotes}
            className="fancy-buttons"
            variant="contained"
            size="large"
            disableElevation
          >
            -
          </Button>
        </ThemeProvider>
      </Stack>
    </div>
  );
}

export default Votes;
