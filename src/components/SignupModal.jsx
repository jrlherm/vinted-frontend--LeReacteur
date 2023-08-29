import Signup from "../page/Signup";

const Modal = ({ setSignupVisible, setUserToken }) => {
  return (
    <div
      className="modal-root"
      onClick={() => {
        setSignupVisible(false);
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
            setSignupVisible(false);
          }}
        >
          X
        </button>
        {<Signup setUserToken={setUserToken} />}
      </div>
    </div>
  );
};

export default Modal;
