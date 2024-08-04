// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level
//                Only works from Parent to Child.
//

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentX from "./ComponentX";
import "./Component.css";

// Prepare new context of User to export.
// This will be the provider component.
export const userContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("John Doe");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
        <ComponentX />
        <ComponentB />
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;
