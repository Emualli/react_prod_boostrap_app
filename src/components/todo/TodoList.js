import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  return (
    <div className='Todo-list'>
      <ul>
        {props.todos.map(todo =>  <TodoItem key={todo.id} {...todo} updateTodo={props.updateTodo} /> )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}