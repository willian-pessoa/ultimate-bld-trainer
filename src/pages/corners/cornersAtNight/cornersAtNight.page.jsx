import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Card from "../../../components/card/card.component";
import Button from "../../../components/button/button.component";

// redux
import { removePairBeforeSleep } from "../../../redux/cornersSlice/cornersSlice";

function CornersAtNight() {
  const pairsBeforeSleep = useSelector(
    (state) => state.corners.reviewBeforeSleep
  );
  const dispatch = useDispatch();
  const [currentPair, setCurrentPair] = useState("");
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (counter >= pairsBeforeSleep.length) {
      setIsFinished(true);
    }
    if (pairsBeforeSleep[counter]) {
      setCurrentPair(pairsBeforeSleep[counter]);
    }
  }, [counter, pairsBeforeSleep]);

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "next":
        setCounter((prev) => prev + 1);
        break;
      case "delete":
        dispatch(removePairBeforeSleep(currentPair));
        break;
      default:
        console.log("erro to handle to next pair");
        return;
    }
  };

  return (
    <div className="corners-to-review-container">
      {isFinished ? (
        <p>Good, you are reviewed all pairs</p>
      ) : (
        <>
          <Card pair={currentPair} />
          <div className="btn-corners-wrapper">
            <Button onClick={() => handleFeedback("next")}>Next</Button>
            <Button onClick={() => handleFeedback("delete")}>Delete</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CornersAtNight;
