import axios from "axios";

function fetchUsers(){
    return axios
      .get(`https://be-nc-news-d5oe.onrender.com/api/articles/${article_id}`).then(({data}) => {
        console.log(data.users)
        return data.users
      })
}

export default fetchUsers