import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFocus from "../../../hooks/useFocus";
import { useSelector, useDispatch } from "react-redux";

import "./cornersMain.styles.scss";

import { AiFillEdit, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import Button from "../../../components/button/button.component";
import DialogBox from "../../../components/dialog-box/dialog-box.component";

//redux
import {
  createCommsPairs,
  updateLetterScheme,
} from "../../../redux/cornersSlice/cornersSlice";

function CornersMain() {
  let navigate = useNavigate();
  const letterSchemeRedux = useSelector((state) => state.corners.letterScheme);
  const dispatch = useDispatch();

  const [inputRef, setInputFocus] = useFocus();
  const [letterScheme, setLetterScheme] = useState(letterSchemeRedux.join(""));
  const [isToEdit, setIsToEdit] = useState(true);

  //dialog Box
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLetterScheme = () => {
    // to edit
    setIsToEdit((prev) => !prev);
    setTimeout(() => {
      setInputFocus();
    }, 100);

    // dispatch to redux
    if (!isToEdit) {
      if (letterScheme !== letterSchemeRedux.join("")) {
        dispatch(createCommsPairs(letterScheme.split("")));
        dispatch(updateLetterScheme(letterScheme));
      }
    }
  };

  return (
    <>
      <div className="letter-scheme-container">
        <input
          ref={inputRef}
          className={!isToEdit ? "input-edit" : null}
          disabled={isToEdit}
          type="text"
          value={letterScheme}
          maxLength="25"
          onChange={(e) => setLetterScheme(e.target.value.toUpperCase())}
        />
        <div className="wrapper-text-letterScheme">
          <h6>Letter Scheme</h6>
          <div onClick={() => handleLetterScheme()} className="btn-edit">
            {isToEdit ? <AiFillEdit /> : <MdOutlineDownloadDone />}
          </div>
        </div>
      </div>
      <div className="btn-corners-container">
        <Button onClick={() => handleNavigation("/corners/cornersToReview")}>
          Start Review
        </Button>
        <Button onClick={() => handleNavigation("/corners/cornersAtNight")}>
          Review Before Sleep
        </Button>
        <AiOutlineInfoCircle
          onClick={handleClickOpen}
          className="info-tooltip"
        />
        <DialogBox open={open} onClose={handleClose}>
          <h6>Start Review</h6>
          <p>
            In the Start Review option, the user will be presenting a pair of
            letters, it is recommended to run the commutator 3 times and choose
            the best feedback option between, if it was easy, normal or hard to
            remember.
          </p>
          <h6>Review Before Sleep</h6>
          <p>
            Difficult pairs will be added to the list to review at night, it is
            recommended before bed to review all pairs in this list to help fix
            it better.
          </p>
        </DialogBox>
      </div>
    </>
  );
}

export default CornersMain;
