import Answer from './Answer';

const Question = ({ title, answers, answerId, setAnswer }) => {
  return (
    <>
      <h2 className="subtitle is-2">{title}</h2>
      <div className="columns is-variable is-gapless is-multiline is-centered">
        {answers.map(item => (
          <div key={item.id} className="column is-narrow">
            <Answer
              item={item}
              selected={answerId === item.id}
              onSelect={setAnswer}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
