import Signin from "../page/Signin";

const Modal = ({ setVisible }) => {
  return (
    <div
      className="modal-root"
      onClick={() => {
        setVisible(false);
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
            setVisible(false);
          }}
        >
          X
        </button>
        {<Signin />}
      </div>
    </div>
  );
};

export default Modal;
