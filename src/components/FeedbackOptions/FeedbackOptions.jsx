import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.buttonDiv}>
        <button
          className={css.buttonGood}
          onClick={ev => onLeaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={css.buttonNeutral}
          onClick={ev => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.buttonBad}
          onClick={ev => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}
