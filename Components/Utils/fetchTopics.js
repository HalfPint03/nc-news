import axios from "axios";

function fetchTopics(){
    return axios.get('https://be-nc-news-d5oe.onrender.com/api/topics').then(({data}) => {
        return data.topics
    })
}

export default fetchTopics