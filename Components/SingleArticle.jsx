import { useEffect, useState } from "react";
import fetchArticle from "./Utils/fetchArticle";
import SingleArticleCard from "./Utils/SingleArticleCard";
import { useParams } from "react-router-dom";

function SingleArticle(){
    const {article_id} = useParams()
    const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchArticle(article_id).then((fetchedArticle) => {
        setArticle(fetchedArticle);
      });
  }, []);
  return SingleArticleCard(article);
}
export default SingleArticle;