import axios from "axios";

function patchArticleVotes(article_id, inc_votes){
    return axios
      .patch(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}`, inc_votes).then(({data}) => {
        return data.article
      })
}
export default patchArticleVotes