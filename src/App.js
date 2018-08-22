import React, { Component } from 'react'
import TodoApp from './TodoApp'
import store from './store' 
import { Provider } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    return (
      // <div className="App">
        <Provider store={store}>
          <TodoApp />
        </Provider>
      // </div>
    );
  }
}

export default App;
