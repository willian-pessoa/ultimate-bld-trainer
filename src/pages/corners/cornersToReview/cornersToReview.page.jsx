import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cornersToReview.styles.scss";

// components
import Card from "../../../components/card/card.component";
import Button from "../../../components/button/button.component";

// redux
import {
  updateQueue,
  removePair,
  updateAllPairsStatus,
  addPairReviewBeforeSleep,
  shiftQueue,
} from "../../../redux/cornersSlice/cornersSlice";

// helpers
function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function CornersToReview() {
  const allPairs = useSelector((state) => state.corners.allPairsToChoice);
  const statusAllPairs = useSelector((state) => state.corners.allPairsStatus);
  const queueOfPairs = useSelector((state) => state.corners.queue);
  const pairsBeforeSleep = useSelector(
    (state) => state.corners.reviewBeforeSleep
  );
  const dispatch = useDispatch();
  const [currentPair, setCurrentPair] = useState("");
  const [reviewedCurrentPair, setReviewdCurrentPair] = useState(false);
  const [timesCurrentPair, setTimesCurrentPair] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let randomPair = "";

    if (allPairs[0]) {
      randomPair = randomItem(allPairs);
    } else {
      if (!queueOfPairs[0] && queueOfPairs.find((element) => element)) {
        dispatch(shiftQueue());
        return;
      } else {
        setIsFinished(true);
        return;
      }
    }

    if (!queueOfPairs[0] && randomPair) {
      setCurrentPair(randomPair);
      setTimesCurrentPair(statusAllPairs[randomPair].times);
      setReviewdCurrentPair(statusAllPairs[randomPair].reviewed);
    } else {
      let tempCurrentPair = queueOfPairs[0];
      setCurrentPair(tempCurrentPair);
      setTimesCurrentPair(statusAllPairs[tempCurrentPair].times);
      setReviewdCurrentPair(statusAllPairs[tempCurrentPair].reviewed);
    }
  }, [queueOfPairs, allPairs, statusAllPairs]);

  const handleFeedback = (feedback) => {
    if (timesCurrentPair >= 3) {
      dispatch(updateQueue({ pair: "", position: 0 }));
      return;
    }

    try {
      if (!reviewedCurrentPair) {
        dispatch(removePair(currentPair));
      }
      dispatch(
        updateAllPairsStatus({ pair: currentPair, times: timesCurrentPair + 1 })
      );
    } catch (error) {
      console.log(error);
      return;
    }

    switch (feedback) {
      case "easy":
        dispatch(updateQueue({ pair: currentPair, position: 20 }));
        break;
      case "normal":
        dispatch(updateQueue({ pair: currentPair, position: 13 }));
        break;
      case "hard":
        dispatch(updateQueue({ pair: currentPair, position: 6 }));
        if (!pairsBeforeSleep || !pairsBeforeSleep.includes(currentPair)) {
          dispatch(addPairReviewBeforeSleep(currentPair));
        }
        break;
      default:
        console.log("error to update queue");
    }
  };

  return (
    <div className="corners-to-review-container">
      {isFinished ? (
        <p>
        Good, you reviewed all the pairs !!!</p>
      ) : (
        <>
          <Card pair={currentPair} />
          <div className="btn-corners-wrapper">
            <Button onClick={() => handleFeedback("easy")}>Easy</Button>
            <Button onClick={() => handleFeedback("normal")}>Normal</Button>
            <Button onClick={() => handleFeedback("hard")}>Hard</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CornersToReview;
