import React from 'react';
import '../App.css';

const Message = (props) => {
    return (
        <div className={props.email.read ? "row message read" : "row message unread"} onClick={() => props.messageRead(props.email.id)}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" onClick={() => props.messageSelected(props.email.id)} checked={(typeof props.email.selected !== "undefined") && props.email.selected === true ? "checked" : ""} />
                    </div>
                    <div className="col-xs-2">
                        <i className={true ? "star fa fa-star-o" : "star fa fa-star"}></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                <a href="#">
                    {props.email.subject}
                </a>
            </div>
        </div>
    )
}

export default Message