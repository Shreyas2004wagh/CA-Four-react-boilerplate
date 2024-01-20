import { useRef, useState } from 'react';
import questions from '../questions';
import './QuestionBox.css';

//importing

function QuestionBox(props) {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);//dark mode state
  const highlightRef = useRef();

  const handleHighlight = (clicked) => {
    if (clicked === 'highlight') {
      highlightRef.current.style.color = isDarkMode ? 'blue' : 'red';
    } else {
      highlightRef.current.style.color = isDarkMode ? 'red' :'blue';
    }
  };
  //for highlighting question

  const handleClick = (value) => {
    if (value) {
      props.updateScore();
    }
    count !== questions.length - 1 ? setCount(count + 1) : setTimeout(props.showResult);
  };

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  //for handling dark and light modes
  const options = questions[count].options;

  return (
    <div id='main' className={isDarkMode ? 'dark-mode' : ''}>
      {/* dark and light mode */}
      <div id='nav'>
        <div>Kalvium</div>
        <div>
          <button onClick={handleToggleMode}>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
      <div id='Quiz'>
        <p id='question'>{`Question : ${count + 1} of ${questions.length}`}</p>
        <h1 ref={highlightRef}>{questions[count].text}</h1>
        <div id='options'>
          {options.map((item) => {
            const handleButtonClick = () => handleClick(item.isCorrect);
            //checking
            return (
              <button className='option' key={item.id} onClick={handleButtonClick}>
                <span>{item.option}</span>
                <p className='option-item'>{item.text}</p>
              </button>
            );
          })}
        </div> 
        <div id='navBtn'>   
        {/* navbar */}
          <button onClick={() => handleHighlight('highlight')} id='highlight'>
            Highlight
          </button>
          <button onClick={() => handleHighlight('remove')} id='remove-highlight'>
            Remove Highlight
          </button>
        </div>
      </div>
    </div>
  );
}
//exporting
export default QuestionBox;
