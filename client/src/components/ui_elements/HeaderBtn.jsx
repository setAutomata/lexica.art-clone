import "./HeaderBtn.css";

function HeaderBtn({ handleDialogue }) {
  return (
    <div className="dummyHeaderItem">
      <button className="getStartedBtn" onClick={handleDialogue}>
        Get started
      </button>
    </div>
  );
}

export default HeaderBtn;
