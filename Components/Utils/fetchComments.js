import axios from "axios";

function fetchComments(article_id){
    return axios
      .get(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
      })
}

export default fetchComments