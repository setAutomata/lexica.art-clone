import "./Button.css";

function Button({ color, borderColor, type = "submit", children }) {
  return (
    <button
      className={
        color === "#312e81"
          ? "roundedButton blueButton"
          : "roundedButton silverButton"
      }
      style={{ background: color, border: `1px solid ${borderColor}` }}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
