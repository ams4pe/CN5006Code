import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import FacebookEmoji from './facebookEmoji';
import ToggleMode from './toggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookEmoji  type= "Like"/> 
<FacebookEmoji type= "Love"/> 
<ToggleMode/>   
  </React.StrictMode>,
document.getElementById('root')); 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
