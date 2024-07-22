import "./Post.css";
import Post_Image from "../../../assets/Blog/Blog_Image.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="Post">
      <img className="Post_Image" alt="" sizes="100vw" src={Post_Image} />
      <div className="Post_Info">
        <div className="Post_Categories">
          {post.categories.map((cat, i) => (
            <span key={i} className="Post_Category inter-reg">
              #{cat}
            </span>
          ))}
          {/* <span className="Post_Category inter-reg">#LUA</span>
          <span className="Post_Category inter-reg">#Raiding</span> */}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="Post_Title inter-bold">{post.title}</span>
        </Link>
        <hr />
        <span className="Post_Date inter-thin">
          {new Date(post.dateCreated).toDateString()}
        </span>
      </div>
      <p className="Post_Desc inter-desc">{post.content}</p>
    </div>
  );
}
