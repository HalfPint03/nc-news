import axios from "axios";

function postNewComment(article_id, body, username){
    return axios
      .post(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}/comments`, {body, username}).then(({data}) => {
        return data
      })
}

export default postNewComment