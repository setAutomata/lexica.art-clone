import { Link } from "react-router-dom";
import "./Likes.css";
import RangeSlider from "../../ui_elements/RangeSlider";
import { useEffect } from "react";

function Likes() {
  useEffect(() => {
    document.title = "Likes - Lexica";
  }, []);

  return (
    <div className="likes__container">
      <Link className="likes__title">Likes</Link>

      <div>
        <RangeSlider />
      </div>

      <div className="likes__text">You haven't liked any images yet.</div>
    </div>
  );
}

export default Likes;
