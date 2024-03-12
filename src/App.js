import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      questionText: "what is the capital of france?",
      answerOption: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOption: [
        { answerText: "Joff Bezos", isCorrect: false },
        { answerText: "ELon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOption: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Porter books are there ?",
      answerOption: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [count , setCount] = useState(0)

  const handleOnCLick = (e) => {

    if(e === true){
      // const count = 0;
      let countAdd = count + 1;
      setCount(countAdd);
      

    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="result"> Your Scored {count} out of {questions.length} </div>
        ) : (
          <div className="display">
            <div className="question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}{" "}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOption.map((answerOption) => (
                <button className="button" onClick={() => handleOnCLick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
