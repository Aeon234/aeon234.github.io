import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  return (
    <>
      <div className="Login">
        <form action="" className="LoginForm">
          <h1 className="Login_Form_Title">Welcome👋</h1>
          <div className="Input_Container">
            <FontAwesomeIcon className="Login_InputIcon" icon={faUser} />
            <input
              className="Login_Input_Box inter-reg"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="Input_Container">
            <FontAwesomeIcon className="Login_InputIcon" icon={faUnlock} />
            <input
              className="Login_Input_Box inter-reg"
              type="text"
              placeholder="Password"
            ></input>
          </div>
          <button className="Login_Button inter-bold">Login</button>
        </form>
      </div>
    </>
  );
}
