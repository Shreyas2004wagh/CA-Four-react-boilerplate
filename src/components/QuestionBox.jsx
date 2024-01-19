import { useRef, useState } from 'react';
import questions from '../questions';
import './QuestionBox.css';

function QuestionBox(props) {
  const [count, setCount] = useState(0);
  const highlightRef = useRef();

  const handleHighlight = (clicked) => {
    if (clicked === 'highlight') {
      highlightRef.current.style.color = 'blue';
    } else {
      highlightRef.current.style.color = 'black';
    }
  };

  const handleClick = (value) => {
    if (value) {
      props.updateScore();
    }
    count !== questions.length - 1 ? setCount(count + 1) : setTimeout(props.showResult, 500);
  };

  const options = questions[count].options;

  return (
    <div id='main'>
      <div id='nav'>
        <div>Kalvium</div>
        <div>
          <button>
            Light
          </button>
        </div>
      </div>
      <div id='Quiz'>
        <p>{`Question (${count + 1} of ${questions.length})`}</p>
        <p ref={highlightRef}>{questions[count].text}</p>
        <div id='options'>
          {options.map((item) => {
            const handleButtonClick = () => handleClick(item.isCorrect);
            return (
              <button className='option' key={item.id} onClick={handleButtonClick}>
                <span>{item.option}</span>
                <p className='option-item'>{item.text}</p>
              </button>
            );
          })}
        </div>
        <div id='navBtn'>
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

export default QuestionBox;
