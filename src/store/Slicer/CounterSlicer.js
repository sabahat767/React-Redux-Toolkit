//************Redux Toolkit Slicer*****/

// slicer n action and reducer ka kam sum up krdia hai ab 
// yahan slicer ka ek function bnega yahn objects m initial state reducer 
// wali and actions k name: unke kam jo perform krne sb hath k hath bnegy or 
// khud s search hnge dispatch k wqt switch lgana nh prega

import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice(
    {
        name: 'counter',
        initialState: 0,
        reducers: {
            incrementAction: state => state+1,
            decrementAction: state => state-1

        }
    
    }
);

export const {incrementAction, decrementAction} = CounterSlice.actions
const reducer = CounterSlice.reducer
export default reducer