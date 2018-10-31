import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Message from './components/Message'
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList />
        <Message />
      </div>
    );
  }
}

export default App;
