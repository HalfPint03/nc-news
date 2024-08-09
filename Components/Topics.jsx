import { createTheme, ThemeProvider } from "@mui/material/styles";
import fetchTopics from "./Utils/fetchTopics";
import { useState, useEffect } from "react";
import animationData from "../Components/Utils/lotties/Animation - 1723020635626.json";
import { Link, Routes } from "react-router-dom";
import Lottie from "react-lottie";
import Articles from "./Articles";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
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
    <>
      {topics.map((topic) => {
        return (
          <div className="topic-container" key={topic.slug}>
            <li className="topic-list">
              <Link
                to={`/articles/topic/${topic.slug}`}
                onClick={<Articles topic={topic} />}
              >
                <h2>{topic.slug}</h2>
                <h3>{topic.description}</h3>
              </Link>
            </li>
          </div>
        );
      })}
    </>
  );
}
export default Topics;
