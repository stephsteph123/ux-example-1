import React, { useState } from "react";
import PropTypes from "prop-types";

function Button({
  label = "click me",
  size = "lg",
  hover: initialHover = false,
  disabled = false,
  darkMode = false,
  focus = false,
  handleClick,
}) {
  let paddingScale = "16px 20px";
  let width = "345px";
  let backgroundColor = "var(--primary-blue-blue-100, #3843ff)";
  let color = "#fff";
  let fontSize = "20px";
  let opacity = "100%";
  let border = "";
  let boxShadow = "";

  // State Management - Hover, Focus, Disabled, darkMode
  const [hover, setHover] = useState(initialHover);

  //
  const handleButtonClick = () => {
    console.log("hello");
    if (handleClick) {
      handleClick();
    }
  };

  // Size Options - padding/width/font-size
  if (size === "sm") {
    paddingScale = "8px 16px";
    width = "95px";
    fontSize = "14px";
  }
  // Hover
  if (hover) {
    opacity = "75%";
    boxShadow = "0px 12px 24px 0px rgba(35, 44, 93, 0.06)";
  }
  // Focus
  if (focus) {
    border = "2px solid black";
  }
  //  Disabled
  if (disabled) {
    opacity = "25%";
  }
  // darkMode - background/font color
  if (darkMode) {
    backgroundColor = "var(--primary-base-white, #fff)";
    color = "Black";
  }

  // darkMode + Focus - border
  if (darkMode && focus) {
    border = "2px solid #3843FF";
  }

  const style = {
    display: "flex",
    backgroundColor: backgroundColor,
    width: width,
    color: color,
    padding: paddingScale,
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    border: border,
    boxShadow: boxShadow,
    borderRadius: "40px",
    opacity: opacity,
    fontFamily: "'Roboto', sans-serif",
    fontSize: fontSize,
    fontStyle: "normal",
    fontWeight: 400,
  };
  return (
    <button
      onClick={handleButtonClick}
      style={style}
      onMouseEnter={() => !focus && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
}

// Button.propTypes = {
//   label: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "lg"]),
//   focus: PropTypes.bool,
//   darkMode: PropTypes.bool,
//   handleClick: PropTypes.func,
// };

export default Button;
