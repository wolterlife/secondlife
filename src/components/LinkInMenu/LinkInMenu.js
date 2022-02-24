import React from "react";
import styles from './LinkInMenu.module.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const LinkInMenu = props => {
  return (
    <Link to={props.route} className={styles.link}>
      <p className={styles.title}>{props.title}</p>
    </Link>
  )
}

LinkInMenu.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default LinkInMenu;
