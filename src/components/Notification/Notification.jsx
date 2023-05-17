import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/Notification/Notification.module.css';

export class Notification extends Component {
  render() {
    return (
      <div className={css.div}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
