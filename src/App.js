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

  markAsReadButtonClicked = () => {
    console.log("markAsReadButtonClicked")
    //TODO: For each selected message, mark it as read.
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    console.log("selectedMessages", selectedMessages)
    selectedMessages.forEach(message => this.messageRead(message.id))
  }

  messageSelected = async (id) => {
    console.log("messageSelected", id)

    const updatedMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected;
      } 
      return message;
    })

    this.setState({
      messages: updatedMessages
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
        <Toolbar markAsReadButtonClicked={this.markAsReadButtonClicked}/>
        <MessageList messages={this.state.messages} messageRead={this.messageRead} messageSelected={this.messageSelected}/>
      </div>
    );
  }
}

export default App;
