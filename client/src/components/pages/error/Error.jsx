import { Link } from "react-router-dom";
import Home from "../../../assets/images/home.svg";
import "./Error.css";

function Error() {
  return (
    <div className="error__container">
      <div className="error__msg">404 - Page Not Found</div>

      <Link className="error__btn" to="/">
        <img src={Home} alt="go to home" />
        Home
      </Link>
    </div>
  );
}

export default Error;
