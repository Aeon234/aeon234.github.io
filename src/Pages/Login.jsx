import "./Login.css";
import axios from "axios";
import { verifyUser } from "../API";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const DisableLogin = !(
    document.getElementById("username")?.value &&
    document.getElementById("password")?.value
  );

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // CREATE ACCOUNT
  // async function handleSubmit() {
  //   let response = await createUser(user);
  //   if (response.status !== 200) {
  //     alert("User account could not be created");
  //   }
  // }

  // LOGIN
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await verifyUser(user);
    if (response) {
      sessionStorage.setItem("User", response);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
      navigate("/");
    } else {
      alert("Login Failed");
    }
    console.log(DisableLogin);
  }

  return (
    <>
      <div className="Login animated animatedFadeInUp fadeInUp">
        <form onSubmit={handleSubmit} className="LoginForm">
          <h1 className="Login_Form_Title">Welcome👋</h1>
          <div className="Input_Container">
            <FontAwesomeIcon className="Login_InputIcon" icon={faUser} />
            <input
              className="Login_Input_Box inter-reg"
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              onChange={handleChange}
              required
              maxLength={20}
              autoComplete="off"
            ></input>
          </div>
          <div className="Input_Container">
            <FontAwesomeIcon className="Login_InputIcon" icon={faUnlock} />
            <input
              className="Login_Input_Box inter-reg"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              maxLength={20}
            ></input>
          </div>
          <button
            type="submit"
            disabled={DisableLogin}
            className="Login_Button inter-bold"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
