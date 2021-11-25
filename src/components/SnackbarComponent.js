import React, { useState } from "react";
import Button from "./Button";
import { Snackbar } from "./Snackbar";

export default function SnackbarComponent() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={isOpen}
        handleClose={handleClose}
        message="Data has been stored"
        autoHideDuration={30000}
        position="top-right"
        type="information"
      />
    </div>
  );
}
