import classNames from 'classnames';

const Answer = ({ item, selected, onSelect }) => {
  return (
    <button
      key={item.id}
      type="button"
      className={classNames('button', 'mx-1', {
        'is-info is-selected': selected
      })}
      onClick={() => onSelect(item)}
    >
      {item.answer}
    </button>
  );
};

export default Answer;
