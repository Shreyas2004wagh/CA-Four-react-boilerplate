
import questions from '../questions'

function Result(props) {

  return (
    <div id='result'>
        <p>You got {props.score} out of 5 - ({(props.score/questions.length)*100}%) </p>
        <button onClick={props.restartQuiz} >Restart Game</button>
    </div>
  )
}

export default Result