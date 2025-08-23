import "./InputBox.css";
import { useRef, useEffect } from "react";
import Search from "../../assets/images/search.svg";
import Upload from "../../assets/images/upload.svg";
import Version from "../../assets/images/versionControl.svg";

function InputBox({ handleVer = null, place_Holder }) {
  const ref = useRef();
  const devRef = useRef();
  const uploadRef = useRef();

  function handleFocus() {
    devRef.current.style.outline = "1px solid #332f8c";
  }

  function handleBlur() {
    devRef.current.style.outline = "1px solid transparent";
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="InputBox-container">
      <div className="InputBox" ref={devRef}>
        <img src={Search} alt="search" width="14rem" />
        <input
          ref={ref}
          type="text"
          placeholder={place_Holder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <input ref={uploadRef} type="file" id="uploadImage" hidden />

        <button
          className="upload__btn"
          onClick={() => uploadRef.current.click()}
        >
          <img src={Upload} alt="upload" />
        </button>
      </div>

      <button
        id="verBtn"
        onClick={handleVer}
        style={handleVer ? {} : { display: "none" }}
      >
        <img src={Version} alt="version control" />
      </button>
    </div>
  );
}

export default InputBox;
