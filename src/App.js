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
      loaded: false,
    }
  }

  componentWillMount(){
    fetch("http://localhost:8082/api/messages")
    .then(response => response.json())
    .then(response => {
      this.setState({
        messages: response
      })
    })
  }


  render() {

    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
