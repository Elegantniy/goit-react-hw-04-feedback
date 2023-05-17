import React, { useState } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setFeedbackGood] = useState(0);
  const [neutral, setFeedbackNeutral] = useState(0);
  const [bad, setFeedbackBad] = useState(0);

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback
  };
  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
    return Math.round(PositiveFeedbackPercentage);
  }; 

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        const newGood = good + 1;
        setFeedbackGood(newGood);
        break;
      case 'neutral':
        const newNeutral = neutral + 1;
        setFeedbackNeutral(newNeutral);
        break;
      case 'bad':
        const newBad = bad + 1;
        setFeedbackBad(newBad);
        break;
      default:
        alert('Our developer broke something');
    }
  };
  const total = countTotalFeedback();
  const options = Object.keys({ good, neutral, bad });
  return (
    <>
      <Section title="Give us a feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Global statistics">
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </>
  );
};