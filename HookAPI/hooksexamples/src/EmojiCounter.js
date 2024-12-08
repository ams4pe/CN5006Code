import React, { useState, useEffect } from "react";

import './App.css';
import Love from './love.png';
import Sad from './sad.png';
import Like from './like.png';

function EmojiCounter(props) {
  const [count, setCount] = useState(0);
  const [pic, setPic] = useState(Love);
  
  useEffect(() => {
    console.log('UseEffect Function Called');

    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") { 
      setPic(Like);
    } else if (props.pic === "Sad") {
      setPic(Sad);
    }
  });

  const clickHandler = () => {
    console.log('Count', count)
    setCount(count + 1);
  };

  return (
    <div>
        <p>
    {props.pic}<span></span>
    <img src={pic} alt='' />
      <button onClick={clickHandler}>Click Me : {count}</button>
        </p>
    </div>
  );
}

export default EmojiCounter;
