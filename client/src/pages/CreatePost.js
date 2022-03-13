export default function Create() {
  const styles = {
    body: {
      backgroundColor: "grey",
     
      fontFamily: "Anton",
    },
    form: {
      padding: "8%",
      margin: "2em",
      backgroundColor: "light-grey",
      width: "50%",
      height: "70%",
      borderRadius: "7px",
      
      
    },

    center: {
     display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      flexDirection: "column",
    },
    formControl: {
      display: "flex",
      padding: "0.50em",
    },
    label: {
      flex: "0 1 6em",
      paddingRight: "0.25em",
    },
    input: {
      flex: "0 1 20em",
      paddingRight: "0.25em",
    },
    btn: {
      borderRadius: "7px",
      marginTop: "2em",
      marginRight: "1em",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.center}>
        
        <form style={styles.form}>
          <div style={styles.formControl}>
            <label htmlFor="text" style={styles.label}>
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Your title"
              style={styles.input}
            />
          </div>
          <div style={styles.formControl}>
            <label htmlFor="text" style={styles.label}>
              Your post
            </label>
            <textarea
              id="post"
              type="text"
              name="post"
              placeholder="Your thoughts..."
              style={styles.input}
            />
          </div>
          <div style={styles.formControl}>
            <button type="submit" style={styles.btn}>
              Post
            </button>
            <button type="submit" style={styles.btn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
