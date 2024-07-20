import "./Post.css";
import Post_Image from "../../../assets/Blog/Blog_Image.jpg";

export default function Post() {
  return (
    <div className="Post">
      <img className="Post_Image" alt="" sizes="100vw" src={Post_Image} />
      <div className="Post_Info">
        <div className="Post_Categories">
          <span className="Post_Category inter-reg">#World of Warcraft</span>
          {/* <span className="Post_Category inter-reg">#LUA</span>
          <span className="Post_Category inter-reg">#Raiding</span> */}
        </div>
        <span className="Post_Title inter-bold">Lorem Impsum</span>
        <hr />
        <span className="Post_Date inter-thin">1 hour ago</span>
      </div>
      <p className="Post_Desc inter-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quos culpa laudantium vitae maxime, assumenda qui magni. Ipsum ex
        consectetur mollitia molestias velit dolor voluptas quaerat voluptates
        aliquam. Modi, porro. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatibus quos culpa laudantium vitae maxime, assumenda qui
        magni. Ipsum ex consectetur mollitia molestias velit dolor voluptas
        quaerat voluptates aliquam. Modi, porro. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatibus quos culpa laudantium vitae
        maxime, assumenda qui magni. Ipsum ex consectetur mollitia molestias
        velit dolor voluptas quaerat voluptates aliquam. Modi, porro.
      </p>
    </div>
  );
}
