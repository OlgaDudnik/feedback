import PropTypes from 'prop-types';
import styles from 'styles/styles.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(e => {
      return (
        <button
          key={e}
          type="button"
          className={styles.button}
          name={e}
          onClick={el => onLeaveFeedback(el.currentTarget.name)}
        >
          {e}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
