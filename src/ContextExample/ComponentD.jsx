import React, { useContext, useState } from "react";

// import the context from Component A.
import { userContext } from "./ComponentA";

function ComponentD() {

 const user = useContext(userContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`bye ${user}`}</h2>    
    </div>
  );
}

export default ComponentD;
