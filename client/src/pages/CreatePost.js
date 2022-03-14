import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../util/mutations";
import { QUERY_ME, QUERY_POSTS } from "../util/queries";
import "../styles/landing.css";
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
  const [postState, setpostState] = useState({
    title: "",
    text: "",
  });

  const [addPost, { data, error, loading }] = useMutation(ADD_POST
    , {
      //update method 
    update(cache, { data: { addPost } }) {
      try {
        // retrieve existing
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
   //  update the cache by combining existing data with the newly created data
        cache.writeQuery({
          query:QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const me = cache.readQuery({ query: QUERY_ME })?.me;
      if (!me) {
        // no me query in the cache yet. abort update.
        return;
      }
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  }
  );

  const handleChange = (event) => {
    const { name,value } = event.target;
 
      setpostState({ ...postState, [name]:value });
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          //  ...postState
          postTitle: postState.title,
          postText: postState.text,
        },
      });

      window.alert("Post Added");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setpostState("");
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
              value={postState.title}
              type="text"
              name="title"
              placeholder="Your title"
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formControl}>
            <label htmlFor="text" style={styles.label}>
              Your post
            </label>
            <textarea
              id="post"
              value={postState.text}
              type="text"
              name="text"
              placeholder="Your thoughts..."
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formControl}>
            <button type="submit" onClick={handleSubmit} style={styles.btn}>
              Post
            </button>
            <button type="submit" onClick={handleCancel} style={styles.btn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
