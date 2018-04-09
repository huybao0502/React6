import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  addTodo = (event) => {
    event.preventDefault();
    const newTodo =  {description: this.state.description, date: this.state.date};
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo = (event) => {
    let newTodos = this.state.todos.filter((todo, i) => i!== +event.target.id);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const itemRows = this.state.todos.map((item, index) => 
    <tr key={index}><td>{item.date}</td>
    <td>{item.description}</td>
    <td><button id={index} onClick={this.deleteTodo}>Delete</button></td>
    </tr>)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <label>Description: </label>
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            <label>Date: </label>
            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <div>
        <table>
                <tbody>
                  <tr><th>Date</th><th>Description</th></tr>
                  {itemRows}
                </tbody>
              </table>
        </div>          
      </div>    
    );
  }
}

export default App;