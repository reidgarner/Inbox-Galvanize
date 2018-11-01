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

  messageRead = (id) => {
    console.log('message read', id)
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
