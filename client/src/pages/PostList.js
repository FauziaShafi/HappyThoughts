import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_POSTS } from "../util/queries";

export default function PostList() {
  const posts = ["Happy thought title", "Happy day", "Whatever", "Again!!!"];
  const styles = {
    body: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gridGap: "20px",
      alignItems: "center",
      marginTop: "8%",
    },
    link: {
      width: "60%",
      backgroundColor: "grey",
      padding: "10px",
    },
    linkStyle : {
      textDecoration: 'none',
      fonSize : "2rem",
      color : "white"
    }
  };
  const { loading, data } = useQuery(QUERY_POSTS);
  const postData = data?.posts || [];
  console.log(postData);

  return (
    
    <div className="mb-8">
     
      <div style={styles.body}>
      <h1>All Posts </h1>
        {postData.map((item) => (
          <li className="list-group-item" key={item.id} style={styles.link}>
            <Link to={`/posts/${item._id}`} style={styles.linkStyle}>{item.postTitle}</Link>
          </li>
        ))}
      </div>
      <hr />
    



    </div>
  );
}
