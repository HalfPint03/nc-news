import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Articles from "../Components/Articles";
import Users from "../Components/Users";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
