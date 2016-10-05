import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './../redux/actions/message-actions'

class App extends Component {

  state = {
    message: ''
  }

  handleMessageChange = () => {
    const message = this.refs.message.value
    this.setState({ message })
  }

  handleClick = () => {
    this.props.addMessage({ text: this.state.message })
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="page">
        <h1>Redux sample</h1>
        <ul className="message-list">
        {this.props.messages.map((message, index) => 
          <li key={index} className="message-list__item">{message.text}</li>
        )}
        </ul>
        <input ref="message" type="text" value={this.state.message} onChange={this.handleMessageChange} />
        <button onClick={this.handleClick}>Send</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = {
  addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
