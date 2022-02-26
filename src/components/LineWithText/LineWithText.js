import React from "react";
import styles from './LineWithText.module.css';
import PropTypes from 'prop-types';

const LineWithText = ({title}) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}
LineWithText.propTypes = {
  title: PropTypes.string.isRequired,
}

export default LineWithText
