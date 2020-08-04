import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import './TaskAdder.css'
const taskAdder = (props)=>{
    return(
        <div className= "AddTask">
            <div className="taskLabel">
                Add New Task
            </div>
            <div>
            <IconButton aria-label="User Icon" color="primary">
                <AddCircleIcon onClick = {props.openModal} fontSize="large"/>
            </IconButton>
            </div>
        </div>
    )
}

export default taskAdder;