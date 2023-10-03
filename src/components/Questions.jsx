import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Decision from "./Decision";

const QuestionsComponent = () => {
  const { category } = useParams();
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let decisionVal = 0;

  const questions = [
    // RETAIL QUESTIONS
    {
      text: "Is it a trend I found online?",
      category: "Retail",
      score: {
        yes: -1,
        no: 1,
      },
    },
    {
      text: "Can I borrow or find on Buy Nothing?",
      category: "Retail",
      score: {
        yes: -1,
        no: 1,
      },
    },
    {
      text: "Does it align with my minimalist goals?",
      category: "Retail",
      score: {
        yes: 1,
        no: -1,
      },
    },
    // FOOD QUESTIONS
    {
      text: "Is it something I could make at home?",
      category: "Food",
      score: {
        yes: 1,
        no: -1,
      },
    },
    {
      text: "Do I already have a meal planned?",
      category: "Food",
      score: {
        yes: -1,
        no: 1,
      },
    },
    {
      text: "Have I eaten out or ordered in recently?",
      category: "Food",
      score: {
        yes: -1,
        no: 1,
      },
    },
    // SERVICE QUESTIONS
    {
      text: "Can I do it efficiently myself?",
      category: "Service",
      score: {
        yes: 1,
        no: -1,
      },
    },
    {
      text: "Will this save me time or stress?",
      category: "Service",
      score: {
        yes: 1,
        no: -1,
      },
    },
    // GENERAL QUESTIONS
    {
      text: "Does this align with my overall financial goals?",
      choices: ["Yes", "No"],
      category: "General",
      score: {
        yes: 1,
        no: -1,
      },
    },
    {
      text: "Did I just decide I want this recently?",
      category: "General",
      score: {
        yes: -1,
        no: 1,
      },
    },
    {
      text: "Is it a necessity?",
      category: "General",
      score: {
        yes: 1,
        no: -1,
      },
    },
  ];

  const displayQuestions = questions.filter(
    (question) =>
      question.category === category || question.category === "General"
  );

  const decisionMaker = (choice) => {
    console.log("choice", choice);
    const selectedQuestion = displayQuestions[currentQuestionIndex];
    console.log("selectedQuestion score", selectedQuestion.score);
    for (const [key, value] of Object.entries(selectedQuestion.score)) {
      if (choice === key) {
        decisionVal = value;
        console.log("choice:", key, "value:", value);
      }
    }
    setTotalScore(totalScore + decisionVal);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <main className="h-[100vh] flex justify-center items-center">
      <Link to="/" className="text-white absolute top-2 left-2 underline">
        Back To Categories
      </Link>
      {currentQuestionIndex < displayQuestions.length && (
        <div className="question-card bg-yellow-300 p-4 w-[30%] h-[30%] rounded-sm">
          <div>
            <h3 className="question-text poppins text-center text-gray-900 mt-2 mb-3 text-lg ">
              {displayQuestions[currentQuestionIndex].text}
            </h3>
            <div className="buttons-container flex flex-col">
              <button
                onClick={() => decisionMaker("yes")}
                className="button border-1 bg-white px-5 py-2 m-2 rounded-sm"
              >
                YES
              </button>
              <button
                onClick={() => decisionMaker("no")}
                className="button border-1 bg-white px-5 py-2 mx-2 mt-2 rounded-sm"
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
      {currentQuestionIndex === displayQuestions.length && (
        <Decision answer={totalScore} />
      )}
    </main>
  );
};

export default QuestionsComponent;
