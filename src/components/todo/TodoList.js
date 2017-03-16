import React from 'react'

export const TodoList = (props) => {
  return (
    <div className='Todo-list'>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                onChange={props.updateTodo.bind(this, todo.id)}
                checked={todo.isComplete}
                type='checkbox'/>
                {todo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}