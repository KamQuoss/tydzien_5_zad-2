import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CloseButton from "./CloseButton";
import "./styles.css";

// vertical: left-center-right
// horizontal: top-bottom
function Snackbar({
  handleClose,
  open,
  message,
  autoHideDuration = 1000,
  position = "bottom-right",
  type = "error"
}) {
  useEffect(() => {
    let timeout = setTimeout(() => {
      handleClose();
    }, autoHideDuration);

    return () => clearTimeout(timeout);
  }, [autoHideDuration, handleClose]);

  return (
    <div
      className={`snackbar ${open && "show"} ${position.replace(
        "-",
        " "
      )} ${type}`}
    >
      {message} <CloseButton onClick={handleClose}>&times;</CloseButton>
    </div>
  );
}

Snackbar.propTypes = {
  position: PropTypes.oneOf([
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ]),
  type: PropTypes.oneOf(["error", "warning", "information", "success"])
};

export default Snackbar;
