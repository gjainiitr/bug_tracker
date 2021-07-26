import React,{useState} from 'react'
import './bugForm.css' 
import BugModel from '../../../Models/bugModel'
export default (props) => {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e) {
        setBugObject({
            ...bugObject,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bug-create">
            { props.title=="Edit Bug" && <button className="close-btn" onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name='name' placeholder='Bug Name' onChange={inputChanged} value={bugObject.name} required></input>
                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description on the bug' onChange={inputChanged} value={bugObject.details} required></textarea>
                <label>Steps:</label>
                <textarea name='steps' placeholder='Steps to recreate the bug' onChange={inputChanged} value={bugObject.steps} required></textarea>
                <label>Priority:</label>
                <select name='priority' onChange={inputChanged} value={bugObject.priority} required>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned:</label>
                <select name='assigned'  value={bugObject.assigned}  onChange={inputChanged}>
                    <option>Gopal Jain</option>
                </select>
                <label>Application Version:</label>
                <input name='version' placeholder='Application Version'  value={bugObject.version} onChange={inputChanged}></input>
                <button type="submit">{props.title}</button>
            </form>
        </div>
    )
}