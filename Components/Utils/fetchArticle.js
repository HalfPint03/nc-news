import axios from "axios";

function fetchArticle(article_id){
    return axios
      .get(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}`).then(({data}) => {
        return data.article
      })
}

export default fetchArticle