import PropTypes from 'prop-types';
import styles from 'styles/styles.module.css';

const Statistics = ({ good, neutral, bad, total, percent }) => (
  <ul>
    <li className={styles.item}>Good: {good}</li>
    <li className={styles.item}>Neutral: {neutral}</li>
    <li className={styles.item}>Bad: {bad}</li>
    <li className={styles.item}>Total: {total}</li>
    <li className={styles.item}>Positive feedback: {percent}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;
