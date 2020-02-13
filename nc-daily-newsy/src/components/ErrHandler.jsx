import React from "react";

const ErrHandler = ({ err }) => {
  const msg = err ? err : "Ooops page is not found!";
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
};

export default ErrHandler;
