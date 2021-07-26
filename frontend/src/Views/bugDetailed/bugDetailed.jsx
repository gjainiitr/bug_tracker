import React from 'react'
import bugDetailedSection from './Component/bugDetailedSection'
import './bugDetailed.css'
import bugModel from '../../Models/bugModel'

export default (props) => {
    const bug = new bugModel(props.bug);

    return(
        <div className="bug=view">
            <h1>{bug.name}</h1>
            <bugDetailedSection title="Details" info={bug.details} />
            <bugDetailedSection title="Steps" info={bug.steps} />
            <bugDetailedSection title="Priority" info={bug.priority} />
            <bugDetailedSection title="Creator" info={bug.creator} />
            <bugDetailedSection title="App Version" info={bug.version} />
            <bugDetailedSection title="Time Created" info={bug.time} /> 
        </div>
    )
}