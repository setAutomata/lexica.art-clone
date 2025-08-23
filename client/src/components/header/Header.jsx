import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/LexicaLogo.svg";
import Modal from "../modal/Modal";
import GetStartedBtn from "../ui_elements/HeaderBtn";

function Header() {
  const dialog = useRef();

  function handleDialogue() {
    dialog.current.showModal();
  }

  return (
    <>
      <div className="altGetStartedBtn">
        <GetStartedBtn handleDialogue={handleDialogue}>
          Get started
        </GetStartedBtn>
      </div>

      <div className="Header-topNav">
        <Modal ref={dialog} />

        <div className="Header-topNav-left">
          <Link to="/">
            <img
              className="Header-topNav-left-logo"
              src={Logo}
              alt="lexica logo"
            />
          </Link>
        </div>

        <div className="Header-topNav-middle">
          <div className="Header-navLink-container">
            <NavLink to="/">
              <span>Home</span>
              <svg
                stroke="#777"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </NavLink>
          </div>

          <div className="Header-navLink-container">
            <NavLink to="aperture">
              <span>Generate</span>
              <svg
                stroke="#777"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
            </NavLink>
          </div>

          <div className="Header-navLink-container">
            <NavLink to="history">
              <span>History</span>
              <svg
                className="changefill"
                stroke="currentColor"
                fill="#777"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354 3 3z"
                ></path>
              </svg>
            </NavLink>
          </div>

          <div className="Header-navLink-container">
            <NavLink to="likes">
              <span>Likes</span>
              <svg
                stroke="#777"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </NavLink>
          </div>

          <div className="Header-navLink-container">
            <NavLink to="account">
              <span>Account</span>
              <svg
                stroke="#777"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </NavLink>
          </div>
        </div>

        <div className="Header-topNav-right">
          <GetStartedBtn handleDialogue={handleDialogue}>
            Get started
          </GetStartedBtn>
        </div>
      </div>
    </>
  );
}

export default Header;
