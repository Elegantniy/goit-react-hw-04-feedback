import React, { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor() {
    super();
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }
  countTotalFeedback() {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const PositiveFeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(PositiveFeedbackPercentage);
  }

  onLeaveFeedback(name) {
    this.setState(prevState => {
      return {
        [name]: prevState[name] +1
      }
    })
    switch (name) {
      case 'good':
        // this.setState(prevState => {
        //   return {
        //     good: prevState.good + 1,
        //   };
        // });
        break;
      case 'neutral':
        // this.setState(prevState => {
        //   return {
        //     neutral: prevState.neutral + 1,
        //   };
        // });
        break;
      case 'bad':
        // this.setState(prevState => {
        //   return {
        //     bad: prevState.bad + 1,
        //   };
        // });
        break;
      default:
        alert('Our developer broke something');
    }
  }

  render() {
    return (
      <>
        <Section title="Give us a feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Global Statistics">
          {this.state.good > 0 ||
          this.state.bad > 0 ||
          this.state.neutral > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </>
    );
  }
}