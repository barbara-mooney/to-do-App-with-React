import React, { Component } from 'react';


function ListPanel(props) {
       
    const colorWatch = (priority) => {
        if (priority == 'Low Priority') {
            return "list-group-item-success greenColor"
        } else {
            if (priority == 'Medium Priority') {
                return "list-group-item-warning yellowColor"
            } else {
                if (priority == 'High Priority') {
                    return "list-group-item-danger redColor"
            }
            }
    } 
    } 
    
    return (
        <div>        
            <ul className="list-group">
                <li className={ `list-group-item list-group-item-action
                ${colorWatch(props.priority)} boldText`} style={{
                    textDecoration: props.completed
                      ? "line-through"
                      : ""}} >
                    
                    <span><input type="checkbox" aria-label="Checkbox for following text input" onClick={() => props.complete(props.id)} />{props.newTodo}</span>
                    <button className='icon edit-todo' onClick={() => props.edit(props.id)}>
                    <i className='fa fa-edit' />
                    </button>
                    <button className='icon delete-todo' onClick={() => props.delete(props.id)}>
                        <i className='fa fa-trash' />
                    </button>
                </li>
            </ul>
        </div>
)}


export default ListPanel;