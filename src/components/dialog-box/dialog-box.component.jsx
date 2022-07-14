import React from "react";
import "./dialog-box.styles.scss";

import Button from "../button/button.component";

function DialogBox({ children, ...props }) {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose()
  };

  return (
    <>
      {open ? (
        <div className="dialog-box-container">
          <div className="dialog-box-content">
            {children}
            <Button onClick={handleClose}>Ok</Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DialogBox;
