import React, {useState, useEffect} from "react";
import { getRecentPost, getSimilarPost } from "../services";

const PostWidget = ({catergories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug){
      getSimilarPosts(catergories, slug).then((result)=> setRelatedPosts(result))
    } else {
      getRecentPost().then((result)=> setRelatedPosts(result))
    }
  }, [slug])
  

  return <div>PostWidget</div>;
};

export default PostWidget;
