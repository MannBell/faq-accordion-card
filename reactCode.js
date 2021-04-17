import React from "react";
import womanIllustrationMobile from "./images/illustration-woman-online-mobile.svg";
import womanIllustrationDesktop from "./images/illustration-woman-online-desktop.svg"
import boxIllustration from "./images/illustration-box-desktop.svg";
import iconArrowDown from "./images/icon-arrow-down.svg";
import questionsArr from "./questions.json";
import "./style.css";

export const Presentational = (props) => {
  return (
    <Main propys={props}/>
  );
}

const Main = (props) => {
  props = props.propys;

  const questions = questionsArr.map((question, i) => {
    return (
      <Question
        key={i}
        question={question.question}
        answer={question.answer}
        answerId={`question#${i}`}
        openQuestion={props.openQuestion}
        currentlyOpen={props.currentlyOpen}
      />
    );
  })
  
  return (
    <main>
      <section className="card">
      <CardImg
      />
      <div className="card-faq">
        <h1>FAQ</h1>
        <div className="questions">
          {questions}
        </div>
      </div>
      </section>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a target="_blank" href="https://MannBell.github.io/Portfolio">MannBell</a>.
      </div>
    </main>
  );
}

const CardImg = () => {
  return (
    <div className="card-img">
      <div className="woman-mobile">
        <img 
          src={womanIllustrationMobile} 
          alt="illustration-woman-online-mobile"
        />
      </div>
      <div className="woman-desktop">
        <img 
          src={womanIllustrationDesktop} 
          alt="illustration-woman-online-desktop"
        />
      </div>
      <div className="woman-box">
        <img 
          src={boxIllustration} 
          alt="illustration-box"
        />
      </div>
    </div>
  );
}

const Question = (props) => {
  const currentlyOpen = props.currentlyOpen === props.answerId;
  return (
    <div className="question">
      <div className="question-top">
        <h2 // question
          style={{fontWeight: currentlyOpen 
            ? "var(--bold-font)" 
            : "var(--regular-font)" 
          , color: currentlyOpen
            ? "var(--primary-text-verydark-blue)"
            : "var(--neutral-text-verydark-blue)"
          }}
          onClick={props.openQuestion.bind(this, props.answerId)}
        >
          {props.question}
        </h2>
        <span // arrow-down-icon
          className="arrow-down"
          onClick={props.openQuestion.bind(this, props.answerId)}
          style={{transform: currentlyOpen ? "rotate(180deg)" : "rotate(0deg)"}}
        >
          <img src={iconArrowDown}/>
        </span>
      </div>
      <p 
        id={props.answerId} 
        className="question-bottom"
        style={{display: currentlyOpen ? "block": "none"}}
      >
        {props.answer}
      </p>
    </div>
  );
}