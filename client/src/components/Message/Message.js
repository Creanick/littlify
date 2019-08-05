import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
function Message({ open = false, message, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={2000}
      message={<span>{message}</span>}
      onClose={onClose}
    />
  );
}

export default Message;
