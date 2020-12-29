import Answer from './Answer';

const Question = ({ title, answers, answerId, setAnswer }) => {
  return (
    <>
      <h2 className="subtitle is-2">{title}</h2>
      <section className="section has-text-centered">
        {answers.map(item => (
          <Answer
            key={item.id}
            item={item}
            selected={answerId === item.id}
            onSelect={setAnswer}
          />
        ))}
      </section>
    </>
  );
};

export default Question;
