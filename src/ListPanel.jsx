import React, { Component } from 'react';

export default props => (
        <div>        
            <ul className="list-group">
                <li className="list-group-item"><span><input type="checkbox" aria-label="Checkbox for following text input" onClick={props.completeTodo}/></span>{props.todoItem}<span className="badge badge-primary badge-pill">EDIT</span><span className="badge badge-primary badge-pill">DELETE</span></li>
            </ul>
        </div>
)

        


/* <ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
</ul> */