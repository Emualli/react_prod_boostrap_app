import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers'

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
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos)
    const todos = updateTodo(this.state.todos, toggleTodo(todo))
    this.setState({ todos })
}

  handleInputChange(e) {
    this.setState({ currentTodo: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''
    })
  }

  handleEmptySubmit (e) {
    e.preventDefault()
    this.setState({
        errorMessage: `Please supply a todo name`
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
          <div className='Todo-App'>
              {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
              <TodoForm
                currentTodo={this.state.currentTodo}
                handleInputChange={this.handleInputChange.bind(this)}
                handleSubmit={submitHandler}
              />
              <TodoList
                todos={this.state.todos}
                updateTodo={this.handleToggle}
              />
          </div>
      </div>
    );
  }
}

export default App;
