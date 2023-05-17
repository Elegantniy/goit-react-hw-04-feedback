import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/Statistic/Statistic.module.css';

export class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.textDiv}>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
        <p className={css.text}>Total feedback: {total}</p>
        {positivePercentage ? (
          <p className={css.text}>Positive feedback {positivePercentage}%</p>
        ) : (
          <p className={css.text}>Positive feedback: 0</p>
        )}
      </div>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};