import "./RangeSlider.css";

function RangeSlider({ value, setValue, max = 12 }) {
  return (
    <input
      className="rangeSlider"
      type="range"
      min="1"
      max={max}
      step="1"
      value={value ? value : null}
      onChange={(e) => setValue(+e.target.value)}
    />
  );
}

export default RangeSlider;
