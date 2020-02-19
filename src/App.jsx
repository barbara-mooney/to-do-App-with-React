import React, { Component } from 'react';
import ViewPanel from './ViewPanel';

class App extends Component {
  constructor (props) {
    super(props);
    const toDoCounter = 1;
    this.state = {
      newTodo: '',
      priorityLevel: '',
      completed: false,
      listofTodos: [],
      toDoCounter: toDoCounter,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
  }

handleInputChange(event) {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value 
    });
  }
addTodo (event) {  
  const nextId = this.state.doToCounter + 1;
  const todo = this.state.newTodo;
  const priorityLevel = this.state.priorityLevel;
  const completed = this.state.completed;
  const newTodoToadd = {
    todoKey: nextId,
    newTodo: todo,
    priority: priorityLevel,
    completed: completed,
  }
  this.setState ({
    listofTodos: this.state.listofTodos.concat([newTodoToadd]),
    toDoCounter: nextId,
  });
}
completeTodo (event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
editTodo(event) {
  
  return (
    <div>
    <div className="card-body">
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
        name="newTodo" key={item.todoKey} onChange={this.handleInputChange}>{this.listofTodos.todoItem}</textarea>
      </div>
    </div>
    <div className="card-body">
      <label for="exampleFormControlSelect1">Priority</label>
      <select className="form-control" id="exampleFormControlSelect1" name="priorityLevel" key={item.todoKey} onChange={this.handleInputChange}>
        <option>Select a priority</option>
        <option>Low priority</option>
        <option>Medium priority</option>
        <option>High priority</option>
      </select>
    </div>
    <div className="card-footer text-muted">
      <button 
            type="button" 
            className="btn btn-success btn-block"   
            name="addTodo"
            onClick={this.saveTodo}>Save</button>
    </div>
  </div>
  )
}
saveTodo (event) {  
  this.state.listofTodos.map(item => (
    <ViewPanel
      todoKey={item.todoKey}
      todoItem={item.todoItem}
      priorityLevel={item.priorityLevel}
      completed={item.completed}
      />
  ))  
}


  render() {
    return (
      <div>
        <div className='container'>
          <h1>Very Simple To-Do App</h1>
          <h3>Track all of the things</h3>
          <hr size="15px" />
          <br/>
          <div style={{display: 'flex'}}>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  Add New To-do
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">I want to...</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    name="newTodo"
                    onChange={this.handleInputChange}></textarea>
                  </div>
                </div>
                <div className="card-body">
                  <label for="exampleFormControlSelect1">How much of a priority is this?</label>
                  <select className="form-control" id="exampleFormControlSelect1" name="priorityLevel" onChange={this.handleInputChange}>
                    <option>Select a priority</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="card-footer text-muted">
                  <button 
                        type="button" 
                        className="btn btn-success btn-block"   
                        name="addTodo"
                        onClick={this.addTodo}>Add</button>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                  View To-Dos
                </div>
                {
                  this.state.listofTodos.map(item => (
                    <ViewPanel
                      todoKey={item.todoKey}
                      todoItem={item.todoItem}
                      priorityLevel={item.priorityLevel}
                      completed={item.completed}
                      />
                  ))
                }  
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
