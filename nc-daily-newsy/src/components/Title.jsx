import React from "react";

const Title = props => {
  return (
    <div>
      <header className="header">
        <h1 className="mainTitle" id="title">
          NC Daily Newsy
        </h1>
      </header>
      <div>
        <p className="sign">Signed in as: {props.userInfo.user}</p>
        <img
          src={props.userInfo.avatar}
          alt={props.userInfo.user}
          className="img"
        ></img>
      </div>
    </div>
  );
};

export default Title;
