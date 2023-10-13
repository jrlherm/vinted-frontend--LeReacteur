import Signin from "../page/Signin";

const Modal = ({ setSigninVisible, setSignupVisible, setUserToken }) => {
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
          style={{ width: "30px", margiLeft: "auto" }}
          className="close-button"
          onClick={(event) => {
            setSigninVisible(false);
          }}
        >
          X
        </button>
        {
          <Signin
            setUserToken={setUserToken}
            setSigninVisible={setSigninVisible}
            setSignupVisible={setSignupVisible}
          />
        }
      </div>
    </div>
  );
};

export default Modal;
