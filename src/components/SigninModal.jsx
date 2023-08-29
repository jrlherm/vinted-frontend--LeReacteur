import Signin from "../page/Signin";

const Modal = ({ setSigninVisible, setUserToken }) => {
  return (
    <div
      className="modal-root"
      onClick={() => {
        setSigninVisible(false);
      }}
    >
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={(event) => {
            setSigninVisible(false);
          }}
        >
          X
        </button>
        {<Signin setUserToken={setUserToken} />}
      </div>
    </div>
  );
};

export default Modal;
