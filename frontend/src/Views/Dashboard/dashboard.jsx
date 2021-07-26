import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './dashboard.css'
import { useHistory } from 'react-router-dom';
import Card from "./card"
import {getBugs} from "../../Controllers/Redux/bugSlice"
import viewBugs from '../Pages/viewBugs';

export default (props) => {
    const dispatch = useDispatch();
    const browserHistory = useHistory();
    const bugs = useSelector(state => state.bugs);
    let highCount=0, midCount=0, lowCount=0;

    if(bugs != undefined) {
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority) {
        return bugs.filter(bug => bug.priority==priority)
    }

    useEffect(() => {
        dispatch(getBugs())
    }, [bugs == undefined])

    function redirect() {
        browserHistory.push('/viewbugs');
    }


    return (
        <div className="page-container">
            <Card priority="1" count={highCount.length} clicked={ redirect } />
            <Card priority="2" count={midCount.length} clicked={ redirect } />
            <Card priority="3" count={lowCount.length} clicked={ redirect } />
        </div>
    )

}