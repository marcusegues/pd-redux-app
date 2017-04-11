import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { OVERVIEW, ORDERS } from './../constants/routes';

const NavigationLink = ({ path, children }) => (
  <Link
    to={path}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </Link>
);

NavigationLink.propTypes = {
  path: PropTypes.oneOf([OVERVIEW, ORDERS]).isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
