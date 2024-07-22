import { useEffect, useState, useRef } from "react";
import Posts from "../Components/Posts/Posts";
import "./Home.css";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../API";

export function Home() {
  const isMounted = useRef(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!isMounted.current) {
      async function grabPosts() {
        const data = await getPosts();
        data.sort(
          (d1, d2) =>
            new Date(d2.dateCreated).getTime() -
            new Date(d1.dateCreated).getTime()
        );
        if (data) {
          setPosts(data);
        }
      }
      grabPosts();
      isMounted.current = true;
    }
  }, []);
  return (
    <>
      <div className="AboutMe_Section">
        <div className="MyInfo_Section">
          <h4 className="MyInfo_Title">About Me</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            scelerisque luctus urna sit amet bibendum. Nullam eget elementum
            sem, nec efficitur sem. Nullam justo odio, facilisis ac neque et,
            condimentum feugiat nisi. Vivamus fringilla tincidunt lorem quis
            sagittis. Vivamus ligula sem, convallis nec placerat id, pretium non
            ex. Vestibulum tempus, quam quis consequat cursus, arcu sem mattis
            libero, at condimentum eros tortor quis velit. Nunc vehicula felis
            vitae odio hendrerit, quis sodales turpis ultricies. Proin efficitur
            sodales mauris quis bibendum. Pellentesque et felis lorem.
          </p>
        </div>
        <div className="Timeline_Section">
          <p className="col-span-2 col-start-1">Event</p>
          <p className="col-span-2 col-start-3">Description</p>
          <h4 className="col-span-2 col-start-1 col-end-3">
            Next Chapter
            <br></br>
            2024-Present
          </h4>
          <p className="col-span-4 col-start-3">
            Taking first steps towards switching from Cancer Research to
            Computer Science
          </p>
          <h4 className="col-span-2 col-start-1 col-end-3">
            City of Hope, Comprehensive Cancer Center
            <br></br>
            2018-2024
          </h4>
          <p className="col-span-4 col-start-3">
            Starting as a Clinical Research Associate I and transitioned into a
            Clinical Research Coordinator role in 2021. Research focused on
            Hematologic Cancer, Population Sciences and Cardiology.
          </p>
          <h4 className="col-span-2 col-start-1 col-end-3">
            UC, Santa Cruz
            <br></br>
            2013-2017
          </h4>
          <p className="col-span-4 col-start-3">Attained Neuroscience B.S</p>
        </div>
      </div>
      <div className="Blog">
        <Posts posts={posts} />
      </div>
    </>
  );
}
