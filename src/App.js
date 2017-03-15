import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

class App extends Component {
  constructor() {
      super()
      this.state = {
          todos: [
              { id: 1, name: 'Task 1', isComplete: false },
              { id: 2, name: 'Task 2', isComplete: false },
              { id: 3, name: 'Task 3', isComplete: false }
          ],
          currentTodo: ''
      }
  }

  _updateTodo(id) {
    const currentTodo = this.state.todos.filter(t => { return t.id === id })[0]
    if (currentTodo) {
      currentTodo.isComplete = !currentTodo.isComplete
      this.setState({ todos: _.merge(this.state.todos, currentTodo) }) }
  }

  handleInputChange(e) {
    this.setState({ currentTodo: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
          <div className='Todo-App'>
              <form>
                  <input type='text' value={this.state.currentTodo} onChange={this.handleInputChange.bind(this)}/>
              </form>
              <div className='Todo-list'>
                  <ul>
                      {this.state.todos.map((todo) => {
                          return (<li key={todo.id}><input onChange={this._updateTodo.bind(this, todo.id)} checked={todo.isComplete} type='checkbox'/> {todo.name}</li>)
                      })}
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
