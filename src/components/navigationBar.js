import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavigationLink from './navigationLink';
import { OVERVIEW, ORDERS } from './../constants/routes';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">pd-redux-app</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text pullRight>
        <NavigationLink path={OVERVIEW}>
          Favorites
        </NavigationLink>
      </Navbar.Text>
      <Navbar.Text pullRight>
        <NavigationLink path={ORDERS}>
          All Users
        </NavigationLink>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
