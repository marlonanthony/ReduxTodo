import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons' 
import { addTodo } from '../actions'

class AddTodo extends Component {

  state = {
    text: '',
  }

  addTodo = text => {
    this.props.dispatch(addTodo(text))
    this.setState({ text })
  }

  onChange = e => this.setState({ text: e.target.value})

  render() {
    return (
      <div style={{ flexDirection: 'row',
      display: 'flex', justifyContent: 'space-evenly', 
      alignItems: 'center'
      }}>
        <input 
          onChange={this.onChange}
          value={this.state.text}
          type='text' 
          placeholder='Eg. Create New Video'
          style={{ borderWidth: 1, borderColor: '#f2f2e1', fontSize: '18px',
          backgroundColor: '#eaeaea', height: 50, padding: 10, width: '80vw' }}
        />
        <button onClick={() => this.addTodo(this.state.text)}>
          <div style={{ height: 50, backgroundColor: 'eaeaea',
          alignItems: 'center', justifyContent: 'center'
          }}>
            <Ionicon icon='md-add' fontSize={'30px'} 
            style={{
              color: 'de9595', padding: 10
            }}
            />
          </div>
        </button>
      </div>
    )
  }
}

export default connect()(AddTodo)