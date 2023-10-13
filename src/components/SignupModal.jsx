import Signup from "../page/Signup";

const Modal = ({ setSignupVisible, setSigninVisible, setUserToken }) => {
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
          className="close-button"
          onClick={(event) => {
            setSignupVisible(false);
          }}
        >
          X
        </button>
        {
          <Signup
            setUserToken={setUserToken}
            setSignupVisible={setSignupVisible}
            setSigninVisible={setSigninVisible}
          />
        }
      </div>
    </div>
  );
};

export default Modal;
