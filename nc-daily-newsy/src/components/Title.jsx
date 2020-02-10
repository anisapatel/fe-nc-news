import React from 'react';

const Title = (props) => {
    return (
        <header>
            <h1>NC Daily Newsy!</h1>
    <p>User: {props.userInfo.user}</p>
    <img src={props.userInfo.avatar} alt={props.userInfo.user} className="img"></img>
        </header>
    );
};

export default Title;