import "./Single_BlogPost.css";
import Post_Image from "../assets/Blog/Blog_Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
export function Single_BlogPost() {
  return (
    <>
      <div className="Single_BlogPost">
        <img src={Post_Image} alt="" className="BlogPost_Image" />
        <div className="Post_Wrapper">
          <h1 className="BlogPost_Title inter-bold">
            Lorem Ipsum
            <div className="BlogPost_Edit">
              <FontAwesomeIcon className="BlogPost_Icon" icon={faPenToSquare} />
              <FontAwesomeIcon className="BlogPost_Icon" icon={faTrashCan} />
            </div>
          </h1>
          <div className="BlogPost_Info inter-thin">
            <span className="BlogPost_Author">
              Author: <b>Aeon</b>
            </span>
            <span className="BlogPost_Date">1 hour ago</span>
          </div>
          <hr />
        </div>
        <p className="BlogPost_Text inter-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque
          iste labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque
          iste labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque iste
          labore repudiandae quidem corrupti neque officia debitis atque et
          aliquid hic eos dicta maiores, voluptate harum sint cum officiis.
        </p>
      </div>
    </>
  );
}
