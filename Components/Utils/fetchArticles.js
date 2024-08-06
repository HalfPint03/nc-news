import axios from "axios";

function fetchArticles(){
    return axios
      .get("https://be-nc-news-d5oe.onrender.com/api/articles").then(({data}) => {
        return data.articles
      })
}

export default fetchArticles