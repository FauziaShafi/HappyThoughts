import { useAuth } from "../util/auth";
import "../styles/landing.css";
import "../styles/createpost.css";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="expoBox">
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <p>
        Happiness through Problems and Finding Solutions
      </p>
      <div className="postBox">
      <p>Home page</p>
      </div>
    </div>
  );
}
