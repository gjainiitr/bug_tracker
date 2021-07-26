import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../bugCard/bugCard'
import BugDetailed from '../bugDetailed/bugDetailed'

export default () => {
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name:"",
        isDisplayed:false
    });
    
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    function bugClicked(name) {
        SET_DISPLAY_BUG({
            isDisplayed: !DISPLAY_BUG.isDisplayed,
            name: name
        });
    }


    return (
        <div className='page-container'>            
                {bugs.map((bug,key) => (
                    <BugCard key={key} bug={bug} clicked={bugClicked}/>
                ))}
                {DISPLAY_BUG.isDisplayed && <BugDetailed clicked={bugClicked} bug={ bugs.filter((bug) => {return bug.name==DISPLAY_BUG.name }) } />}            
        </div>
    )
}
