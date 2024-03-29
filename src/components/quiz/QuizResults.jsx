import { forwardRef, useMemo } from 'react';

import PropTypes from 'prop-types';

const QuizResultsScore = ({ responses, results, children }, ref) => {
  const response = useMemo(() => {
    let total = 0;
    for (let index = 1; responses[index]; index++) {
      if (index % 2) {
        total += {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
        }[responses[index]];
      } else {
        total += {
          1: 3,
          2: 2,
          3: 1,
          4: 0,
        }[responses[index]];
      }
    }

    if (total <= 9) {
      return results['0-9'];
    }
    if (total >= 10 && total <= 19) {
      return results['10-19'];
    }
    if (total >= 20) {
      return results['20-30'];
    }
  }, [responses, results]);

  return (
    <div ref={ref}>
      <p className="subtitle is-3">{response}</p>
      {children}
    </div>
  );
};

export const QuizResults = forwardRef(QuizResultsScore);

QuizResultsScore.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  results: PropTypes.shape({
    '0-9': PropTypes.string.isRequired,
    '10-19': PropTypes.string.isRequired,
    '20-30': PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
