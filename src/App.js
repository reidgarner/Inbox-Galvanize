import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      data: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:8082/api/messages")
    .then(response => response.json())
    .then(response => {
      this.setState({
        messages: response
      })
    })
  }

  messageRead = async (id) => {
    console.log('message read', id)

    // Patch Request Example \|/

    let message = {
      messageIds: [id],
      command: "read",
      "read": true
    }

    const result = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    // Patch Request Example ^^^

    const updatedMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.read = !message.read;
      } 
      return message;
    })

    this.setState({
      messages: updatedMessages
    })
  }

  render() {

    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages} messageRead={this.messageRead}/>
      </div>
    );
  }
}

export default App;
