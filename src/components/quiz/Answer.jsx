import PropTypes from 'prop-types';
import classNames from 'classnames';

const Answer = ({ item, selected, onSelect }) => (
  <button
    key={item.id}
    type="button"
    className={classNames('button', 'mx-1', {
      'is-info is-selected': selected,
    })}
    onClick={() => onSelect(item)}
  >
    {item.answer}
  </button>
);

export default Answer;

Answer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
