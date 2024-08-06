import fetchComments from "./Utils/fetchComments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Comments(){
    const {article_id} = useParams()
    const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((fetchedComments) => {
        setComments(fetchedComments);
      });
  }, []);
  return comments;
}
export default Comments