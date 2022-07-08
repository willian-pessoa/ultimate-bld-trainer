import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./edgesToReview.styles.scss";

// components
import Card from "../../../components/card/card.component";
import Button from "../../../components/button/button.component";

// redux
import { updateQueue, removePair } from "../../../redux/edgesSlice/edgesSlice";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function EdgesToReview() {
  const allPairs = useSelector((state) => state.edges.allPairsToChoice);
  const queueOfPairs = useSelector((state) => state.edges.queue);
  const dispatch = useDispatch();
  const [currentPair, setCurrentPair] = useState("");

  useEffect(() => {
    console.log(!queueOfPairs[0]);
    if (!queueOfPairs[0]) {
      setCurrentPair(randomItem(allPairs));
    } else {
      setCurrentPair(queueOfPairs[0]);
    }
  }, [queueOfPairs, allPairs]);

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "easy":
        dispatch(updateQueue({ pair: currentPair, position: 20 }));
        dispatch(removePair(currentPair));
        break;
      case "normal":
        dispatch(updateQueue({ pair: currentPair, position: 13 }));
        dispatch(removePair(currentPair));
        break;
      case "hard":
        dispatch(updateQueue({ pair: currentPair, position: 6 }));
        dispatch(removePair(currentPair));
        break;
      default:
        console.log("error to update queue");
    }
  };

  return (
    <div className="edges-to-review-container">
      <Card pair={currentPair} />
      <div className="btn-edges-wrapper">
        <Button onClick={() => handleFeedback("easy")}>Easy</Button>
        <Button onClick={() => handleFeedback("normal")}>Normal</Button>
        <Button onClick={() => handleFeedback("hard")}>Hard</Button>
      </div>
    </div>
  );
}

export default EdgesToReview;
