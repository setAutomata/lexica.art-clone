import { useEffect, useRef, useState } from "react";
import "./Aperture.css";
import RangeSlider from "../../ui_elements/RangeSlider";
import Focus from "../../../assets/images/focus.svg";
import ImgHor from "../../../assets/images/imgHor.svg";
import ImgVer from "../../../assets/images/imgVer.svg";
import Menu from "../../../assets/images/menu.svg";
import ArrowDown from "../../../assets/images/arrowDown.svg";
import Empty from "../../../assets/images/empty.svg";

export default function Aperture() {
  const [dimension, setDimension] = useState(6);
  const [index, setIndex] = useState(0);
  const model = ["Aperture v5", "Aperture v4", "Aperture v3.5"];
  const dimensions = [
    "",
    "1600 x 832",
    "1440 x 960",
    "1360 x 1120",
    "1280 x 1280",
    "1120 x 1360",
    "960 x 1440",
    "832 x 1600",
  ];
  const modelRef = useRef();

  useEffect(() => {
    document.title = "Lexica Aperture";
    document.addEventListener("click", closeModelsOption, true);
    return () => document.addEventListener("click", closeModelsOption, true);
  }, []);

  function closeModelsOption(e) {
    if (modelRef.current && !modelRef.current.contains(e.target))
      modelRef.current.style.display = "none";
  }

  return (
    <div className="aperture__container">
      <div className="aperture__left">
        <div className="aperture__left__title">Describe your image</div>

        <div className="aperture__input">
          <div
            className="prompt"
            contentEditable
            data-placeholder="A cute mouse pilot wearing aviator googles, unreal engine render, 8k"
          ></div>
        </div>

        {(model[index] === "Aperture v4" ||
          model[index] === "Aperture v3.5") && (
          <>
            <div className="aperture__left__title">Negative prompt</div>
            <div className="aperture__input" style={{ minHeight: "auto" }}>
              <div
                className="prompt"
                contentEditable
                data-placeholder="black and white, monochrome"
              ></div>
            </div>
          </>
        )}
        <div className="generateBtn__container">
          <button className="generateBtn">Generate</button>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <div className="aperture__right">
        <div className="aperture__right__title">Lexica Aperture v5</div>

        <div className="dimensions">
          <img src={Focus} alt="dimension sign" />
          Dimensions
        </div>

        <div className="sliderContainer">
          <RangeSlider value={dimension} setValue={setDimension} max={7} />
          <div className="visiualizeDimension" data={dimensions[dimension]}>
            <img
              src={Empty}
              alt="empty"
              width={+dimensions[dimension].split("x")[0] / 10}
              height={+dimensions[dimension].split("x")[1] / 10}
            />
          </div>
        </div>

        <div className="sliderResult">
          <img src={ImgHor} alt="horizontal image" />
          <div style={{ cursor: "default", color: "#888" }}>
            {dimensions[dimension]}
          </div>
          <img src={ImgVer} alt="vertical image" />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="slow-fast">
            <div className="sf-btn">Slow</div>
            <div className="sf-btn sf-btn-active">Fast</div>
          </div>
          <div style={{ color: "#777", cursor: "default" }}>
            Generation Speed
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", color: "#777" }}>
          <img src={Menu} alt="menu" />
          Model type
        </div>

        <button
          id="modelType"
          onClick={() => (modelRef.current.style.display = "block")}
        >
          {model[index]} <img src={ArrowDown} alt="arrow down" />
        </button>

        <ul className="models" ref={modelRef}>
          <li
            onClick={() => {
              setIndex(0);
              modelRef.current.style.display = "none";
            }}
          >
            {model[0]}
          </li>
          <li
            onClick={() => {
              setIndex(1);
              modelRef.current.style.display = "none";
            }}
          >
            {model[1]}
          </li>
          <li
            onClick={() => {
              setIndex(2);
              modelRef.current.style.display = "none";
            }}
          >
            {model[2]}
          </li>
        </ul>
      </div>
    </div>
  );
}
