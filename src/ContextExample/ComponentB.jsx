import React, { useState } from "react";

// This is a consumer context of provider ComponentA.
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="box">
      <h1>Component B</h1>
      <ComponentC/>
    </div>    
    
  );
}

export default ComponentB;
