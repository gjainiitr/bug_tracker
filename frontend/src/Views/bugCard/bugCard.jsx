import React from 'react'
import './bugCard.css'
import priorityController from '../../Controllers/priorityController'

export default (props) => {
    const {name, priority, version} = props.bug;
    const {level, color} = priorityController(priority);
    function Clicked() {
        props.clicked(props.name);
    }

    return(
        <div className="bug-card" onClick={Clicked} style={{color:color}}>
            <h2 className='name'>{name}</h2>
            <h4 className='priority'>{level}</h4>
            <h5 className='version'>{version}</h5>
        </div>
    )
}