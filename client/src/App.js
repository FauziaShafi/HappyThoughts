import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import Landing from "./pages/Landing";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import SinglePost from "./pages/SinglePost";
import Footer from "./components/Footer";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/posts/:postID" element={<Post />} />
            <Route path="/home/create" element={<CreatePost />} />
            <Route path="/home" element={<SinglePost />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
