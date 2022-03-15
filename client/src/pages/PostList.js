import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_POSTS } from "../util/queries";

export default function PostList() {
 
  const styles = {
    body: {
      fontFamily: "Anton",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gridGap: "20px",
      alignItems: "center",
      marginTop: "2%",
      backgroundColor: "#ECF0F5",
    },
    link: {
      width: "60%",
      backgroundColor: "white",
      padding: "10px",
    },
    linkStyle : {
      textDecoration: 'none',
      fonSize : "2rem",
      color : "black"
     
      
    },
    h5 : {
      color : "black"
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
            <Link to={`/posts/${item._id}`} style={styles.linkStyle}><h5>{item.postTitle}</h5></Link>
          </li>
        ))}
      </div>
      <hr />
    



    </div>
  );
}
