import React from 'react'
import BugDetailedSection from './Component/bugDetailedSection'
import './bugDetailed.css'
import bugModel from '../../Models/bugModel'
import { useDispatch } from 'react-redux'
import { markComplete } from '../../Controllers/Redux/bugSlice'

export default (props) => {
    const dispatch = useDispatch();
    const bug = new bugModel(props.bug[0]);
   
    return(
        <div className="bug-view">
            <button onClick={props.clicked} className='close-btn'>Close</button>
            <h1>{bug.name}</h1>
            <BugDetailedSection title="Details" info={bug.details} />
            <BugDetailedSection title="Steps" info={bug.steps} />
            <BugDetailedSection title="Priority" info={bug.priority} />
            <BugDetailedSection title="Creator" info={bug.creator} />
            <BugDetailedSection title="App Version" info={bug.version} />
            <BugDetailedSection title="Time Created" info={bug.time} />
            <button onClick={() => {dispatch(markComplete())}}>Mark Complete</button>
        </div>
    )
}