import React, { useState } from "react";
import PropTypes from "prop-types";
import CancelButton from "./CancelButton";

function TextField({ inputName = "inputName", handleClick }) {
  let type = "email";

  const handleTextField = () => {
    console.log("hello");
    if (handleClick) {
      handleClick();
    }
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    alignSelf: "stretch",
  };

  const style2 = {
    display: "flex",
  }

  const labelStyle = {
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "1px",
    // textTransform: "uppercase",
  };

  const inputStyle = {
    fontSize: "20px",
    fontFamily: "'Roboto', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    borderTop: "0px solid #ccc",
    borderLeft: "0px solid #ccc",
    borderRight: "0px solid #ccc",
    borderBottom: "2px solid #ccc",
    alignSelf: "stretch",
  };

  return (
    <div style={style}>
      <label style={labelStyle}>{inputName}</label>
      <div style={style2}>
        <input
          type={type}
          style={inputStyle}
          onClick={handleTextField}
        />
        <CancelButton/>
      </div>
    </div>
  );
}

// TextField.propTypes = {
//   inputName: PropTypes.string,
//   handleClick: PropTypes.func,
// };

export default TextField;
