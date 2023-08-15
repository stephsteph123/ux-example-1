import React, { useState } from 'react';
import PropTypes from "prop-types";

function CancelButton({
  hover: initialHover = false,
  handleClick
}) {
  let opacity = "100%";
  let boxShadow = "";
  
  // State Management
  const [hover, setHover] = useState(initialHover);

  // Define the handleClick function
  const handleButtonClick = () => {
    console.log("hello");
    if (handleClick) {
      handleClick(); // Call the provided handleClick function if it exists
    }
  };

  // Hover
  if (hover) {
    opacity = "75%";
    boxShadow = "0px 12px 24px 0px rgba(35, 44, 93, 0.06)"
  }

  const style = {
    opacity: opacity
  }

  return (
    <div className = "cancelButton" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style} onClick={handleButtonClick}>
              <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 30 16"
          fill="none"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="#CDCDD0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
            fill="#040415"
          />
        </svg>
    </div>
  )
}

// CancelButton.propTypes = {
//   handleClick: PropTypes.func,
// }

export default CancelButton
