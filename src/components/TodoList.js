import React from 'react'

const TodoList = ({todos, toggleTodo }) => {
  return (
    <div style={{padding: 20}}>
      {todos.map(todo => 
        <button style={{ padding: 20 }} key={todo.id} onClick={() => toggleTodo(todo.id)}>
          <h2 style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</h2>
        </button>
      )}
    </div>
  )
}

export default TodoList