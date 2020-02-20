import React, { Component } from 'react';


function ListPanel(props) {
       
    const colorWatch = (priority) => {
        console.log(priority)
        if (priority == '1') {
            return "list-group-item-success"
        } else {
            if (priority == '2') {
                return "list-group-item-warning"
            } else {
                if (priority == '3') {
                    return "list-group-item-danger"
            }
            }
    } 
    } 
    return (
        <div>        
            <ul className="list-group">
                <li className={ `list-group-item ${colorWatch(props.priority)}`}>
                    <span>
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    {props.newTodo}{props.priority}
                    <span className="badge badge-primary badge-pill" onClick={() => props.edit(props.id)}>EDIT</span>
                    <span className="badge badge-primary badge-pill" onClick={() => props.delete(props.id)}>DELETE</span>
                </li>
            </ul>
        </div>
)}


export default ListPanel;