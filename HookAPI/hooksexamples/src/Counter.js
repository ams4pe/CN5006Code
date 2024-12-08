import React from "react";
import "./App.css";
import { useState } from 'react';

function HookControlledButtonState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App-header">
      <form>
        <h1>Click Counts are {count}</h1>
        <button type="button" onClick={handleClick}>
          Click me {count}
        </button>
      </form>
    </div>
  );
}

export default HookControlledButtonState;
