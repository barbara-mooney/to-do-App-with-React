import React, { Component } from 'react';
import ListPanel from './ListPanel';
import Edit from './Edit';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      key: '',
      newTodo: '',
      priority: '',
      completed: false,
      listofTodos: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.complete = this.complete.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

handleInputChange(event) {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value 
    });
  }

addTodo (event) {
  event.preventDefault()
  const todo = this.state.newTodo;
  const priorityLevel = this.state.priority;
  const todoCompleted = this.state.completed;
  const newTodoToadd = {
    key: Date.now() + Math.random(),
    newTodo: todo,
    priority: priorityLevel,
    completed: todoCompleted,
    isBeingEdited: false,
  }
  this.setState ({
    listofTodos: this.state.listofTodos.concat([newTodoToadd]),
    newTodo: '',
    priority:'',
  });
}

complete (key) {
  let tempList = this.state.listofTodos
  tempList.forEach((item) => {
    if (key==item.key) {
      if (item.completed == false) {
        item.completed = true
      } else {
        item.completed = false
      }
    }
    this.setState ({
      listofTodos: tempList
    })
})
}
edit (key) {
  let tempList = this.state.listofTodos
  tempList.forEach((item) => {
    if (key==item.key) {
      item.isBeingEdited = true;
    }
    this.setState ({
      listofTodos: tempList
    })
})
}

delete (key) {
  let tempList = this.state.listofTodos.filter(item => {
    return item.key != key
    })
    this.setState ({
      listofTodos: tempList
    })
}


save (title, priority, key) {  
  console.log(title)
  let tempList = this.state.listofTodos
  
  tempList.forEach((item) => {
    if (key==item.key) {
      item.newTodo = title;
      item.priority = priority;
      item.isBeingEdited = false;
    }
    this.setState ({
      listofTodos: tempList
    })
})
}

  render() {
    let display;
    if (this.state.listofTodos.length == 0) {
      display = <div className="card-body welcomeMsn"><p className="boldText ">Welcome to Very Simple To-Do App!</p>
      <p>Get started now by adding a new to-do on the left.</p></div>
    } else {
      display = <div>
        {this.state.listofTodos.map((item) => {
          if (item.isBeingEdited == false) {
            return (
              <div>
                <ListPanel
                key={item.key}
                id={item.key}
                newTodo={item.newTodo}
                priority={item.priority}
                completed={item.completed}
                edit={this.edit}
                delete={this.delete}
                complete={this.complete}
                />
              </div>
            )     
          } else {
            return (
              <div>
                <Edit 
                save={this.save}
                key={item.key}
                id={item.key}
                title={item.newTodo}
                />
              </div>
            )
          }
        })}
      </div>
    }
    return (
      <div>
        <div className='container'>
          <h2 className="white">Very Simple To-Do App</h2>
          <h4 className="white">Track all of the things</h4>
          <hr size="15px" />
          <br/>
          <div>
          <div className="row" width="100%">
            <div className="col-4">
              <div className="card">
                <div className="card-header" id="userInputs">
                  Add New To-do
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" className="boldText">I want to...</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    name="newTodo" value={this.state.newTodo}
                    onChange={this.handleInputChange}></textarea>
                  </div>
                </div>
                <div className="card-body">
                  <label htmlFor="exampleFormControlSelect1" className="boldText">How much of a priority is this?</label>
                  <select className="form-control" id="exampleFormControlSelect1" name="priority" value={this.state.priority} onChange={this.handleInputChange}>
                    <option>Select a priority</option>
                    <option>Low Priority</option>
                    <option>Medium Priority</option>
                    <option>High Priority</option>
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
                <div>
                    {display}
                </div>
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