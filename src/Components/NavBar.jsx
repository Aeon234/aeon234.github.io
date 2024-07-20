import "./NavBar.css";
import Aeon_Logo from "../assets/Logo.ico";
import NoChill_Logo from "../assets/NoChill.ico";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavBar() {
  const user = false;
  const CurrentPage = useLocation();
  let AssignedLogo;
  let CurrentPage_Title;
  let CurrentPage_LogoRedirect;
  if (CurrentPage.pathname == "/NoChill_Roster") {
    AssignedLogo = NoChill_Logo;
    CurrentPage_Title = "BEST RAPPER ALIVE - Mal'Ganis";
    CurrentPage_LogoRedirect = "/NoChill_Roster";
  } else {
    AssignedLogo = Aeon_Logo;
    CurrentPage_Title = "";
    CurrentPage_LogoRedirect = "/";
  }
  return (
    <div className="NavBar">
      <div className="NavBar_Container">
        <div className="NavBar_Left">
          <div className="NavBar_Logo_Container">
            <Link
              className="NavBar_Logo_Link"
              styles="margin-right: 0px;"
              to={CurrentPage_LogoRedirect}
            >
              <div className="NavBar_Logo">
                <img
                  className="NavBar_LogoImg"
                  alt=""
                  sizes="100vw"
                  src={AssignedLogo}
                />
              </div>
            </Link>
            <div className="NavBar_Logo_Divider"></div>
            <div className="NavBar_Left"></div>
          </div>
        </div>
        <div className="NavBar_Center">
          <p>{CurrentPage_Title}</p>
        </div>
        <div className="NavBar_Right">
          <div className="NavBar_Right_Container">
            {CurrentPage.pathname !== "/NoChill_Roster" && (
              <Link
                className="RightNav_Link"
                to="/NoChill_Roster"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={NoChill_Logo}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                  }}
                />
                No Chill
              </Link>
            )}
            {CurrentPage.pathname !== "/NoChill_Roster" && (
              <Link
                className="RightNav_Link"
                to="/Blog_Post"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={NoChill_Logo}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                  }}
                />
                Blog Post
              </Link>
            )}
          </div>
          {CurrentPage.pathname !== "/NoChill_Roster" && (
            <Link className="NavBar_RightButton" to="/Login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
