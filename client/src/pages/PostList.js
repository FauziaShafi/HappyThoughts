import React from "react";


export default function Create() {
  const posts = ["Happy thought title", "Happy day", "Whatever", "Again!!!"];
  const styles = {
    body: {
      width: "100%",
      display: "flex",
      flexDirection : 'column',
      gridGap : '20px',
      alignItems: "center",
      marginTop : "8%"
      
    },
    link : {
      width : '60%',
      backgroundColor: "grey",
      padding : "10px",
      
    }
  };

  return (
    <div className="mb-8">
     <div style={styles.body}>
     {posts.map(item => (
        <li className="list-group-item" key={item.id} style={styles.link}>
          {item}
        </li>
      ))}

     </div>

      
    </div>
  );
}
