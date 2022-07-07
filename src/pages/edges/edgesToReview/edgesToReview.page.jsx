import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../../components/card/card.component';
import { createCommsPairs } from '../../../redux/edgesSlice/edgesSlice'

import "./edgesToReview.styles.scss";

function EdgesToReview() {
  const allPairs = useSelector(state => state.edges.allPairs);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!allPairs){
      dispatch(createCommsPairs())
    }
  },[])

  return (
    <div className='edges-to-review-container' >
      <Card pair={allPairs && Object.keys(allPairs)[0]}/>
    </div>
  )
}

export default EdgesToReview