import "./History.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputBox from "../../ui_elements/InputBox";
import Button from "../../ui_elements/Button";
import RangeSlider from "../../ui_elements/RangeSlider";

function History() {
  useEffect(() => {
    document.title = "History - Lexica";
  }, []);

  return (
    <div className="history__container">
      <Link className="history__title">Camera Roll</Link>

      <div className="history__input__container">
        <InputBox place_Holder={"Search your images"} />
      </div>

      <Button color="#312e81" borderColor={"#312e81"}>
        Search
      </Button>

      <RangeSlider />

      <div className="history__text">
        Your camera roll is empty.{" "}
        <Link className="history__link" to="/aperture">
          Go generate an image.
        </Link>
      </div>
    </div>
  );
}

export default History;
