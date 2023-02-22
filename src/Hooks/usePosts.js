import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://ping-pong-social.onrender.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return [posts, setPosts];
};
export default usePosts;
