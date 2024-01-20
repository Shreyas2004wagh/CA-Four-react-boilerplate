import React, { useState } from 'react';
import questions from '../questions'
import './Result.css';

function Result(props) {
  const [isDarkMode,setIsDarkMode]=useState(false);
  const handleToggleMode=()=>{
    setIsDarkMode((prevMode)=> 
    !prevMode);
  };

  return (
    <div id='result-container' className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div id='navbar'>
        <div>Kalvium</div>
        <button onClick={handleToggleMode}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
      <div id='result'>
        <p>You got {props.score} out of 5 - {(props.score/questions.length)*100}% </p>
        <button onClick={props.restartQuiz} >Restart Game</button>
    </div>
    </div>
  );
}

export default Result