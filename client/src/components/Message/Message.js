import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
function Message({ open = false, message, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      TransitionComponent={SlideTransition}
      autoHideDuration={2000}
      message={<span>{message}</span>}
      onClose={onClose}
    />
  );
}

export default Message;
