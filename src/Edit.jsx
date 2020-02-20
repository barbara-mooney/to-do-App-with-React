import React, { Component } from 'react';

class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {
        title: '',
        priority: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  // event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value 
    });
  }

render() {
    return (
    <div className="Col-8">
      <div className="card-body">
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
          name="title" key={this.props.id} onChange={this.handleInputChange}value={this.state.title}></textarea>
        </div>
      </div>
      <div className="card-body">
        <label for="exampleFormControlSelect1">Priority</label>
        <select className="form-control" id="exampleFormControlSelect1" name="priority" key={this.props.id} onChange={this.handleInputChange} value={this.state.priority}>
          <option>Select a priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div className="card-footer text-muted">
        <button 
              type="button" 
              className="btn btn-success btn-block"   
              name="addTodo"
              onClick={ () => this.props.save(this.state.title, this.state.priority, this.props.id)}>Save</button>
      </div>
    </div>
    );
}
}

export default Edit;