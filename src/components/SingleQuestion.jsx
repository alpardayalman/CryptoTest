import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section
      className="question-tab-container"
      onClick={() => setShowInfo(!showInfo)}
    >
      <div className="question-tab-wrapper">
        <div className="question-header-wrapper">
          <a className="question-title">{title}</a>
          <button className="btn">
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showInfo && (
          <>
            <div className="question-text-container">{info}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleQuestion;

{
  /* <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>  */
}
