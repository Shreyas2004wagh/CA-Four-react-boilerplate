const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0,option: "A",  text: "Server-side framework", isCorrect: false },
      { id: 1,option: "B", text: "user interface framework", isCorrect: true },
      { id: 2, option: "C", text: "both a and b", isCorrect: false },
      { id: 3,  option: "D",text: "none of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0,  option: "A",text: "JavaScript", isCorrect: true},
      { id: 1,option: "B", text: "Java", isCorrect:  false},
      { id: 2,option: "C", text: "C", isCorrect:  false},
      { id: 3,option: "D", text: "C++", isCorrect:  false},
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, option: "A", text: "A permanent storage.", isCorrect:  false},
      { id: 1,  option: "B",text: "Internal storage of the component.", isCorrect: true},
      { id: 2, option: "C", text: "External storage of the component.", isCorrect:  false},
      { id: 3, option: "D", text: "None of the above.", isCorrect:  false},
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, option: "A", text: " Pair of current state and function updating it", isCorrect: true},
      { id: 1, option: "B", text: "Current State", isCorrect:  false},
      { id: 2, option: "C", text: "Function updating the current state", isCorrect:  false},
      { id: 3,  option: "D",text: "UseState returns nothing", isCorrect:  false},
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0,option: "A", text: "1", isCorrect: true},
      { id: 1, option: "B", text: "2", isCorrect:  false},
      { id: 2, option: "C", text: "3", isCorrect:  false},
      { id: 3, option: "D", text: "4", isCorrect:  false},
    ],
  },
];

export default questions;