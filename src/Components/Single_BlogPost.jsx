import "./Single_BlogPost.css";
import Post_Image from "../assets/Blog/Blog_Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getPost } from "../API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Single_BlogPost() {
  const [post, setPost] = useState({});

  let params = useParams();
  let id = params.id;

  const token = sessionStorage.getItem("User");

  useEffect(() => {
    async function loadPost() {
      let data = await getPost(id);
      setPost(data);
    }
    loadPost();
  }, []);

  return (
    <>
      <div className="Single_BlogPost">
        {post.header && (
          <img src={post.header} alt="" className="BlogPost_Image" />
        )}
        {!post.header && (
          <img src={Post_Image} alt="" className="BlogPost_Image" />
        )}
        <div className="Post_Wrapper">
          <h1 className="BlogPost_Title inter-bold">
            {post.title}
            <div className="BlogPost_Edit">
              {token && (
                <FontAwesomeIcon
                  className="BlogPost_Icon"
                  icon={faPenToSquare}
                />
              )}
              {token && (
                <FontAwesomeIcon className="BlogPost_Icon" icon={faTrashCan} />
              )}
            </div>
          </h1>
          <div className="BlogPost_Info inter-thin">
            <span className="BlogPost_Author">
              Author: <b>{post.author}</b>
            </span>
            <span className="BlogPost_Date">
              {new Date(post.dateCreated).toDateString()}
            </span>
          </div>
          <hr />
        </div>
        <p className="BlogPost_Text inter-desc">{post.content}</p>
      </div>
    </>
  );
}
