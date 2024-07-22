import Post from "./Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="Posts">
      {/* <Post /> */}
      {posts.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </div>
  );
}
