import React from 'react';
import '../App.css';

const Message = (props) => {
    return (
        <div class={true ? "row message unread" : "row message read"}>
            <div class="col-xs-1">
                <div class="row">
                    <div class="col-xs-2">
                        <input type="checkbox" />
                    </div>
                    <div class="col-xs-2">
                        <i class={true ? "star fa fa-star-o" : "star fa fa-star"}></i>
                    </div>
                </div>
            </div>
            <div class="col-xs-11">
                <a href="#">
                    {props.email.subject}
                </a>
            </div>
        </div>
    )
}

export default Message