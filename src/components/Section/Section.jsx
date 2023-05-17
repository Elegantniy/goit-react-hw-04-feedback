import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/Section/Section.module.css';

export class Section extends Component {
  render() {
    return (
      <div className={css.feedbackDiv}>
        {this.props.title ? (
          <h2 className={css.title}>{this.props.title}</h2>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
