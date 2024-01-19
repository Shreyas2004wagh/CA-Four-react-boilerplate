import React, { useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <>
      {showComponent ? (
        <QuestionBox
          showResult={() => setShowComponent(false)}
          updateScore={() => setScore((prevScore) => prevScore + 1)}
        />
      ) : (
        <Result
          restartQuiz={() => {
            setScore(0);
            setShowComponent(true);
          }}
          score={score}
        />
      )}
    </>
  );
}

export default App;
