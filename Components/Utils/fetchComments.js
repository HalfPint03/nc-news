import axios from "axios";

function fetchComments(article_id){
    return axios
      .get(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}/comments`).then(({data}) => {
        if (data.comments.length === 0){
          return [{
            body: 'Not a single one...',
            author: 'No comments for this article'
          }]
        } else {
          return data.comments
        }
      })
}

export default fetchComments