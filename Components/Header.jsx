import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Header() {
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
    <>
      <h1>Grin & Bear News</h1>
      <nav className="home-buttons">
        <Stack spacing={2} direction="row">
          <ThemeProvider theme={theme}>
            <Link to="/">
              <Button
                className="fancy-buttons"
                variant="contained"
                size="large"
                disableElevation
              >
                Home
              </Button>
            </Link>

            <Link to="/articles">
              <Button
                className="fancy-buttons"
                variant="contained"
                size="large"
                disableElevation
              >
                Articles
              </Button>
            </Link>
            <Link to="/topics">
              <Button
                className="fancy-buttons"
                variant="contained"
                size="large"
                disableElevation
              >
                Topics
              </Button>
            </Link>
            <Link to="/users">
              <Button
                className="fancy-buttons"
                variant="contained"
                size="large"
                disableElevation
              >
                Users
              </Button>
            </Link>
          </ThemeProvider>
        </Stack>
      </nav>
    </>
  );
}
export default Header;