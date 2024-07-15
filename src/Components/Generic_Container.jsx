import "./Generic_Container.css";

export function GenericContainer({ isOpen, children }) {
  return (
    <>
      {isOpen ? (
        <div className="Generic_Container">{children}</div>
      ) : // </div>
      null}
    </>
  );
}
