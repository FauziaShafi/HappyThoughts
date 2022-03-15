import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_POSTS } from "../util/queries";
import "../styles/home.css";
export default function PostList() {
  const styles = {
    body: {
      fontFamily: "Anton",
      width: "100%",
      backgroundColor: "#ECF0F5",
      display: "flex",
      flexDirection: "column",
      gridGap: "20px",
      alignItems: "center",
      marginTop: "1%",
    },
    link: {
      width: "60%",
      backgroundColor: "light-Orange",
      padding: "10px",
      borderRadius : "7px",
      marginTop : "2px"
    },
    linkStyle: {
      textDecoration: "none",
      fonSize: "2rem",
      color: "white",
      borderRadius : "2px"
    },
    pad : {
      paddingTop : 0,
      marginTop : 0
    },
    h3 : {
      color : "orange",
      fontSize : "1.5rem",
      fontFamily: "Anton",
    }
  };
  const { loading, data } = useQuery(QUERY_POSTS);
  const postData = data?.posts || [];
  

  return (
    <div className="mb-8">
      <div style={styles.body} className="card">
      <div className="header-img"></div>
        {postData.map((item) => (
          <li className="list-group-item" key={item.id} style={styles.link}>
            <Link to={`/posts/${item._id}`} style={styles.linkStyle}>
              <h3 style={styles.h3} className="textstyle">{item.postTitle}</h3>
            </Link>
            <hr />
            <p className="textstyle">{item.postText}</p>
          </li>
          
        ))}
      </div>
      <hr />
    </div>
  );
}
