import React from 'react';

const ViewPanel = function(props) { 
    return (
        <div>
            if (listofTodos.length === 0) {
                <div className="card-body">
                    Welcome to Very Simple To-Do App! Get started now by adding a new to-do on the left.
                </div>
            } else {
                <div>        
                    <ul class="list-group">
                        <li class="list-group-item"><span><input type="checkbox" aria-label="Checkbox for following text input" onClick={props.completeTodo}/></span>{props.todoItem}<span class="badge badge-primary badge-pill" onClick={props.editTodo}>EDIT</span><span class="badge badge-primary badge-pill">DELETE</span></li>
                    </ul>
                </div>
            }
        </div>
)};

export default ViewPanel;

{/* //     <div>        
//         <ul class="list-group">
//             <li class="list-group-item">{props.todoItem}<span class="badge badge-primary badge-pill">EDIT</span><span class="badge badge-primary badge-pill">DELETE</span></li>
//         </ul>
//     </div>
// ); */}


{/* <ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
</ul> */}