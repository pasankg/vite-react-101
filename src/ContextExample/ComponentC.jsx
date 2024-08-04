import React, { useContext, useState } from "react";

import { userContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(userContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD/>
    </div>
  );
}

export default ComponentC;
