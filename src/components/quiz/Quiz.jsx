import { useEffect, useReducer, useRef, useState } from 'react';

import Question from './Question';
import { QuizResults } from 'components/quiz/QuizResults';
import Switch from 'components/switch/Switch';
import quiz from 'data/quiz.json';

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        step: 'quizzing',
        question: state.quiz.questions[0],
        index: 0,
      };
    case 'next': {
      const next = state.index + 1;
      return {
        ...state,
        step: 'quizzing',
        question: state.quiz.questions[next],
        index: next,
      };
    }
    case 'prev': {
      const prev = state.index - 1;
      return {
        ...state,
        step: 'quizzing',
        question: state.quiz.questions[prev],
        index: prev,
      };
    }
    case 'results':
      return {
        ...state,
        step: 'results',
      };
    default:
      return state;
  }
}

const Quiz = () => {
  const [responses, setResponses] = useState({});
  const [state, dispatch] = useReducer(reducer, {
    step: 'initial',
    question: {},
    quiz,
  });

  const questionRef = useRef(null);
  const showResultsRef = useRef(null);
  const resultRef = useRef(null);

  const nextEnabled =
    state.index < quiz.questions.length - 1 && responses[state.question.id];

  const prevEnabled = state.index > 0;

  const showViewResults =
    state.index === quiz.questions.length - 1 && responses[state.question.id];

  useEffect(() => {
    if (showViewResults) {
      showResultsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showViewResults]);

  useEffect(() => {
    if (state.step === 'quizzing') {
      questionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (state.step === 'results') {
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [state]);

  const setResponse = (answer) => {
    setResponses((resp) => ({ ...resp, [state.question.id]: answer.id }));
  };

  const reset = () => {
    setResponses({});
    dispatch({ type: 'start' });
  };

  return (
    <section className="section">
      <h1 className="title is-1">{quiz.title}</h1>
      <p className="subtitle">{quiz.description}</p>
      <p className="subtitle">{quiz.instructions}</p>
      <Switch test={state.step}>
        <QuizResults
          ref={resultRef}
          value="results"
          responses={responses}
          results={quiz.results}
        >
          <p className="subtitle is-5">{quiz.explanation}</p>
          <p className="subtitle is-6">{quiz.note}</p>
          <div className="columns is-centered">
            <div className="column is-narrow has-text-centered">
              <button
                value="initial"
                type="button"
                className="button is-primary"
                onClick={reset}
              >
                Repetir test
              </button>
            </div>
          </div>
        </QuizResults>

        <div value="initial" className="has-text-centered">
          <button
            type="button"
            className="button is-primary"
            onClick={() => dispatch({ type: 'start' })}
          >
            Començar
          </button>
        </div>

        <div ref={questionRef} value="quizzing" className="is-centered">
          <Question
            value="quizzing"
            question={state.question}
            title={`${state.question.id}/${quiz.questions.length} ${state.question.text}`}
            answers={quiz.answers}
            answerId={responses[state.question.id]}
            setAnswer={setResponse}
          />
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <button
                type="button"
                className="button is-warning"
                onClick={() => dispatch({ type: 'prev' })}
                disabled={!prevEnabled}
              >
                &lt; Anterior
              </button>
            </div>
            <div className="column is-narrow">
              <button
                type="button"
                className="button is-primary"
                onClick={() => dispatch({ type: 'next' })}
                disabled={!nextEnabled}
              >
                Següent &gt;
              </button>
            </div>
          </div>
          {showViewResults && (
            <div className="columns is-centered">
              <div className="column is-narrow has-text-centered">
                <button
                  ref={showResultsRef}
                  type="button"
                  className="button is-danger"
                  onClick={() => dispatch({ type: 'results' })}
                >
                  Veure Resultats
                </button>
              </div>
            </div>
          )}
        </div>
      </Switch>
    </section>
  );
};

export default Quiz;
