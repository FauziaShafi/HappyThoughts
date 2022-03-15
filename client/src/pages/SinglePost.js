import "../styles/landing.css";
import "../styles/createpost.css";



export default function posts() {
  const posts = ["This is a post about programing ", "comment: i as well like programming"];
  const styles = {
    body: {
      width: "100%",
      display: "flex",
      flexDirection : 'column',
      gridGap : '5px',
      alignItems: "center",
      marginTop : "8%"
      
    },
    link : {
      width : '60%',
      backgroundColor: "grey",
      padding : "50px",
      
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
