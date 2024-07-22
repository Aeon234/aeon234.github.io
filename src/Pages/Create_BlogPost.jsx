import "./Create_BlogPost.css";
import { useState } from "react";
import { createPost } from "../API";
import Post_Image from "../assets/Blog/Blog_Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export function Create_BlogPost() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");

  const handleChangeCategories = (e) => {
    const value = e.target.value;
    const items = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    setCategories(items);
    console.log(categories);
  };

  async function handleSubmit() {
    let submitObject = {
      title: title,
      categories: categories,
      content: content,
      author: null,
      dateCreated: new Date(),
    };
    await createPost(submitObject);
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="Create_BlogPost"
      >
        <img src={Post_Image} alt="" className="BlogPost_Image" />
        <div className="Post_Wrapper">
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Post Title"
            className="BlogPost_Title inter-bold"
            required
          />
          <input
            onChange={handleChangeCategories}
            name="categories"
            placeholder="Input categories separated by commas"
            className="inter-reg"
            required
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            name="content"
            placeholder="Post Content"
            className="inter-desc"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
