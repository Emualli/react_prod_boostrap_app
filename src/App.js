import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import { TodoForm, TodoList } from './components/todo'

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

  updateTodo(id) {
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
              <TodoForm
                currentTodo={this.state.currentTodo}
                handleInputChange={this.handleInputChange.bind(this)}
              />
              <TodoList
                todos={this.state.todos}
                updateTodo={this.updateTodo.bind(this)}
              />
          </div>
      </div>
    );
  }
}

export default App;
