import React, { useState } from "react";
import "../css/questions.css";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <section className="question-section">
      <div className="questions-titles">
        <h1>Frequent questions</h1>
      </div>
      <div className="question-container">
        <div className="question-box">
          <div className="question-wrapper">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
