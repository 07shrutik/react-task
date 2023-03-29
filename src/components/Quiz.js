import React, { useState } from "react";

const questionsData = [
    {    question: "Which team won the IPL 2021 title?",
        options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Royal Challengers Bangalore"],
    correctAnswer: "Chennai Super Kings",
  },
  {
    question: "Who holds the record for the most runs in IPL history?",
    options: ["Virat Kohli", "Suresh Raina", "Rohit Sharma", "Chris Gayle"],
    correctAnswer: "Virat Kohli",
  },
  {
    question: "Which player has taken the most wickets in IPL history?",
    options: ["Lasith Malinga", "Amit Mishra", "Harbhajan Singh", "Piyush Chawla"],
    correctAnswer: "Lasith Malinga",
  },
  {
    question: "Which team has won the most IPL titles?",
    options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Sunrisers Hyderabad"],
    correctAnswer: "Mumbai Indians",
  },
  {
    question: "Who won the Orange Cap in IPL 2020?",
    options: ["KL Rahul", "David Warner", "Shikhar Dhawan", "Ishan Kishan"],
    correctAnswer: "KL Rahul",
  },
  {
    question: "Who won the Purple Cap in IPL 2020?",
    options: ["Kagiso Rabada", "Jasprit Bumrah", "Trent Boult", "Yuzvendra Chahal"],
    correctAnswer: "Kagiso Rabada",
  },
  {
    question: "Which player has hit the most sixes in IPL history?",
    options: ["Chris Gayle", "AB de Villiers", "MS Dhoni", "Rohit Sharma"],
    correctAnswer: "Chris Gayle",
  },
  {
    question: "Which team did Sunrisers Hyderabad defeat in the final to win the IPL 2016 title?",
    options: ["Rising Pune Supergiants", "Mumbai Indians", "Gujarat Lions", "Royal Challengers Bangalore"],
    correctAnswer: "Royal Challengers Bangalore",
  },
  {
    question: "Which player hit the first century of the IPL?",
    options: ["Brendon McCullum", "Chris Gayle", "AB de Villiers", "Virender Sehwag"],
    correctAnswer: "Brendon McCullum",
  },
  {
    question: "Which team did Rajasthan Royals defeat in the final to win the inaugural IPL title?",
    options: ["Mumbai Indians", "Chennai Super Kings", "Kings XI Punjab", "Royal Challengers Bangalore"],
    correctAnswer: "Chennai Super Kings",
  },
];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questionsData.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextClick = () => {
    if (currentQuestion === questionsData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestartClick = () => {
    setSelectedOptions(Array(questionsData.length).fill(null));
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const score = selectedOptions.reduce(
    (acc, optionIndex, i) =>
      acc + (optionIndex === questionsData[i].options.indexOf(questionsData[i].correctAnswer) ? 2 : 0),
    0
  );

  const isPassing = score >= 12;

  if (showResult) {
    return (
      <div>
          <p>Your score: {score}/20</p>
        {isPassing ? (
          <h1>Congratulations, you passed the test!</h1>
          ) : (
              <button onClick={handleRestartClick}>Restart Test</button>
              )}
      </div>
    );
  }

  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <p>{questionsData[currentQuestion].question}</p>
      {questionsData[currentQuestion].options.map((option, i) => (
        <div style={{display:"flex"}}>
        <label key={i}>
          <input
            type="radio"
            // name={`question-${currentQuestion}`}
            value={i}
            checked={selectedOptions[currentQuestion] === i}
            onChange={() => handleOptionSelect(i)}
            
          />
          {option}
        </label>
        </div>
      ))}
      <button onClick={handleNextClick}>
        {currentQuestion === questionsData.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;