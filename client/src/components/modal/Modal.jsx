import "./Modal.css";
import Close from "../../assets/images/close.svg";
import Lexica from "../../assets/images/LexicaLogo.svg";
import Google from "../../assets/images/google-logo.svg";

function Modal({ ref }) {
  return (
    <dialog className="modal__container" ref={ref}>
      <div className="closeDialog">
        <button onClick={() => ref.current.close()}>
          <img src={Close} alt="close button" />
        </button>
      </div>

      <div className="dialog__content">
        <div style={{ marginBottom: "1rem" }}>
          <img src={Lexica} alt="lexica" width={90} />
        </div>

        <button className="googleBtn">
          <img src={Google} alt="google logo" />
          Continue with Google
        </button>

        <div style={{ color: "#777", margin: "1rem 0" }}>
          Or continue with email
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <input
            id="email"
            type="email"
            name="email-add"
            placeholder="Email address"
          />
        </div>

        <button id="continueBtn">Continue</button>
      </div>
    </dialog>
  );
}

export default Modal;
