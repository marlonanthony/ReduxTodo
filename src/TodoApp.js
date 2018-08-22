import React, { Component } from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

class TodoApp extends Component {
  render() {
    return (
      <div style={{ paddingTop: 40 }}>
        <AddTodo />
        <div>
          <VisibleTodos />
        </div>
      </div>
    )
  }
}

export default TodoApp