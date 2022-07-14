import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFocus from "../../../hooks/useFocus";
import { useSelector, useDispatch } from "react-redux";

import "./cornersMain.styles.scss";

import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import Button from "../../../components/button/button.component";

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
      </div>
    </>
  );
}

export default CornersMain;
