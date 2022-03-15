import React from "react";

import { Link } from "react-router-dom";

export default function PostList() {
  const postData = ["Happy thought title", "Happy day", "Whatever", "Again!!!"];
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
    linkStyle: {
      textDecoration: "none",
      fonSize: "2rem",
      color: "white",
    },
  };

  return (
    <div className="mb-8">
      <div style={styles.body}>
        <h1>All Posts </h1>
        {postData.map((item) => (
          <li className="list-group-item" key={item.id} style={styles.link}>
            <Link to={`/posts/ID`} style={styles.linkStyle}>
              Title
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
