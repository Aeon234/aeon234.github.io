import "./Popup.css";

export function Popup({ isOpen, children }) {
  return (
    <>
      {isOpen ? (
        <div className="Popup animate2x fadeIn nodelay">
          {/* <div className="Popup_Background" /> */}
          {/* <div className="Popup_Container"> */}
          {/* <div className="Popup_Controls"></div> */}
          {children}
        </div>
      ) : // </div>
      null}
    </>
  );
}

export function SubmittedPopup({ isOpen, children }) {
  return (
    <>
      {isOpen ? (
        <div className="SubmittedPopup animate2x fadeIn nodelay">
          {/* <div className="Popup_Background" /> */}
          {/* <div className="Popup_Container"> */}
          {/* <div className="Popup_Controls"></div> */}
          {children}
        </div>
      ) : // </div>
      null}
    </>
  );
}
