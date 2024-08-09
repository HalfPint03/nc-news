import axios from "axios";

function fetchArticles(topic){
  if(topic){
    return axios
      .get(`https://be-nc-news-d5oe.onrender.com/api/articles?topic=${topic}`).then(({data}) => {
        return data.articles
      })
    } else {
      return axios
      .get("https://be-nc-news-d5oe.onrender.com/api/articles",{topic}).then(({data}) => {
        return data.articles
      })
    }
}

export default fetchArticles