import { useEffect, useState } from "react";
import fetchArticles from "../Components/Utils/fetchArticles";
import ArticleCard from "./Utils/ArticleCard";
import Lottie from 'react-lottie';
import animationData from '../Components/Utils/lotties/Animation - 1723020635626.json';
import React from 'react';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
  }
  return ArticleCard(articles);
}
export default Articles;
