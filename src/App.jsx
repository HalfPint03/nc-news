import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Articles from "../Components/Articles";
import Users from "../Components/Users";
import SingleArticle from "../Components/SingleArticle";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
      </Routes>
    </>
  );
}

export default App;
