import React, { useState } from "react";
import ComponentY from "./ComponentY";

function ComponentX() { 
  return (
    <div className="box">
      <h1>Component X</h1>
      <ComponentY/>
    </div>
  );
}

export default ComponentX;
