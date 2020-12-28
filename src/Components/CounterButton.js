import React,{useState} from 'react'
// import {incrementAction, decrementAction} from '../store/Action'
import { useDispatch }from 'react-redux'
import { decrementAction, incrementAction } from '../store/Slicer/CounterSlicer'

function CounterButton() {
  
    const dispatch = useDispatch();
  
    return (
        <div>
           
            <button onClick={()=>dispatch(incrementAction())}>+</button>
            <button onClick={()=>dispatch(decrementAction())}>-</button>
        </div>
    )
}

export default CounterButton