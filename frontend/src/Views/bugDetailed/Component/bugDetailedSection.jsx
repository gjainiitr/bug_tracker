import React from 'react'
import './bugDetailedSection.css'

export default (props) => {
    console.log(props)
    return(
        <div className='view-section'>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}