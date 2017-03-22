import React from 'react'

export const TodoItem = (props) => {
    return (
        <li key={props.id}>
            <input
                onChange={props.updateTodo.bind(this, props.id)}
                checked={props.isComplete}
                type='checkbox'/>
            {props.name}
        </li>
    )
}

TodoItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool
}