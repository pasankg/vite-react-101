import React, { useContext, useState } from "react";

// import the context from Component A.
import { userContext } from "./ComponentA";

function ComponentY() {

 const user = useContext(userContext);
 
  return (
    <div className="box">
      <h1>Component Y</h1>
      <h2>{`Yo ${user}`}</h2>
    </div>
  );
}

export default ComponentY;
