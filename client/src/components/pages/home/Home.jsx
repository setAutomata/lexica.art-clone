import { useState, useRef, useEffect } from "react";
import { Link, Form } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./Home.css";
import InputBox from "../../ui_elements/InputBox";
import RangeSlider from "../../ui_elements/RangeSlider";
import LexicaLogo from "../../../assets/images/LexicaLogo.svg";
import ArrowDown from "../../../assets/images/arrowDown.svg";
import Heart from "../../../assets/images/heart.svg";
import Search from "../../../assets/images/search.svg";
import Magic from "../../../assets/images/magic.svg";
import Button from "../../ui_elements/Button";
import Loading from "../../../assets/images/loading.svg";
import fetchImages from "../../../request/fetchImages";

function Home() {
  const [rangeValue, setRangeValue] = useState(5);
  const [sliderMaxValue, setSliderMaxValue] = useState(12);
  const lexAper = useRef();
  const imageRef = useRef();

  useEffect(() => {
    document.title = "Lexica";
  }, []);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["image"],
    queryFn: fetchImages,
    staleTime: 1000 * 60 * 5,
    onError: (err) => {
      throw Error(`useQuery Error: ${err.message}`);
    },
  });

  function handleVersion() {
    if (lexAper.current.style.display === "none") {
      lexAper.current.style.display = "flex";
    } else {
      lexAper.current.style.display = "none";
    }
  }

  return (
    <div className="Home">
      <img className="Home-logo" src={LexicaLogo} alt="lexica logo" />

      <Link className="Home-aperture-btn" to="/aperture">
        Try Aperture v5!
      </Link>

      <Form className="HomeInput" action="/">
        <div className="inputRow">
          <InputBox
            place_Holder={"Search for an image"}
            handleVer={handleVersion}
          />
        </div>

        <div ref={lexAper} className="lexAperture" style={{ display: "none" }}>
          Lexica Aperture v3.5 and v4
          <img src={ArrowDown} alt="down arrow" />
        </div>

        <div>
          <Button color="#312e81" borderColor={"#312e81"}>
            Search
          </Button>
          <Button color="transparent" borderColor={"#444"} type="button">
            Generate
          </Button>
        </div>

        <div id="sliderContainer" style={{ position: "relative" }}>
          <RangeSlider
            value={rangeValue}
            setValue={setRangeValue}
            max={sliderMaxValue}
          />
          <div
            className="thumbValue"
            style={{ transform: `translateX(${+rangeValue * 16}px)` }}
          >
            {rangeValue}
          </div>
        </div>
      </Form>

      {isLoading && <img className="loading" src={Loading} alt="loading" />}
      {isError && <h4 className="error-message">{error.message}</h4>}
      <div
        className="Home-image-container"
        style={{ columns: `${rangeValue} auto` }}
      >
        {data?.images.map((image, i) => {
          return (
            <div className="cell" key={image.id}>
              <img
                ref={imageRef}
                className="ai-image"
                src={image.src}
                alt={`image-${i}`}
                loading="lazy"
              />
              <div className="topOverlay">
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="smallBtn">
                      <img
                        src={Search}
                        alt="search"
                        style={{ transform: "scale(1.4)" }}
                      />
                    </div>
                    <div className="smallBtn">
                      <img src={Heart} alt="heart" />
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <div className="smallBtn">
                      <img src={Magic} alt="magic" />
                    </div>
                  </div>
                </div>

                <div className="prompt">{image.prompt}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
