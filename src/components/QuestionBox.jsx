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
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      props.updateScore();
    }
    setCount((prevCount) => (prevCount < questions.length - 1 ? prevCount + 1 : prevCount));
  };
  

  const options = questions[count].options;

  return (
    <div id='main'>
        <nav id='nav'>
            <div>
                Kalvium
            </div>
            <button>
                light
            </button>
        </nav>
      <div id='Quiz'>
        <p>{`Question (${count + 1} of ${questions.length})`}</p>

        <p>{questions[count].text}</p>
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
        <div>
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
