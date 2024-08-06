import { useEffect, useState } from "react";
import fetchArticles from '../Components/Utils/fetchArticles'
import ArticleCard from "./Utils/ArticleCard";

function Articles(){
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((fetchedArticles) => {
        setArticles(fetchedArticles);
      });
  }, []);
  return ArticleCard(articles);
}
export default Articles