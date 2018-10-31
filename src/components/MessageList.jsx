import React from 'react';
import '../App.css';
import Message from './Message'

const MessageList = (props) => {
    return (
        props.messages.map(message => {
            return <Message email={message} read={message}/>
        })
    )
}

export default MessageList