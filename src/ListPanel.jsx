import React, { Component } from 'react';


function ListPanel(props) {
       
    const colorWatch = (priority) => {
        if (priority == 'Low') {
            return "list-group-item-success"
        } else {
            if (priority == 'Medium') {
                return "list-group-item-warning"
            } else {
                if (priority == 'High') {
                    return "list-group-item-danger"
            }
            }
    } 
    } 
    
    return (
        <div>        
            <ul className="list-group">
                <li className={ `list-group-item 
                ${colorWatch(props.priority)} `} style={{
                    textDecoration: props.completed
                      ? "line-through"
                      : ""}} >
                    <span>
                    <input type="checkbox" aria-label="Checkbox for following text input" onClick={() => props.complete(props.id)} />
                    </span>
                    {props.newTodo}
                    <span className="badge badge-primary badge-pill" onClick={() => props.edit(props.id)}>EDIT</span>
                    <span className="badge badge-primary badge-pill" onClick={() => props.delete(props.id)}>DELETE</span>
                </li>
            </ul>
        </div>
)}


export default ListPanel;