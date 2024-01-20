import React, { useState } from 'react';
import questions from '../questions'
import './Result.css';

function Result(props) {
  const [isDarkMode,setIsDarkMode]=useState(false); //State for managing dark mode
  const handleToggleMode=()=>{ // Made a Function to handle toggling between dark and light mode
    setIsDarkMode((prevMode)=> 
    !prevMode);
  };

  return (
    //structure of the Result component
    <div id='result-container' className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div id='navbar'>
        <div>Kalvium</div>
        <button onClick={handleToggleMode}>
          {isDarkMode ? 'Light' : 'Dark'} 
          {/* dark mode works */}
        </button>
      </div>
      <div id='result'>
        <p>You got {props.score} out of 5 - {(props.score/questions.length)*100}% </p>
        <button onClick={props.restartQuiz} >Restart Game</button>
        {/* for restart */}
    </div>
    </div>
  );
}
// Export the Result component
export default Result