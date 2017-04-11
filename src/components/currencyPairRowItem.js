import React from 'react';
import classNames from 'classnames';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './../static/sass/app.css';

class CurrencyPairRowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, bid, ask } = this.props.currencyPair;

    return (
      <Row className="show-grid cp-row flex-container">
        <Col xs={2} sm={2}>{id}</Col>
        <Col xs={3} sm={3}>{bid}</Col>
        <Col xs={3} sm={3}>{ask}</Col>
        <Col xs={2} sm={2}>
          <Button
            bsStyle={'primary'}
          >
            {'Buy'}
          </Button>
        </Col>
        <Col xs={2} sm={2}>
          <Button
            bsStyle={'primary'}
          >
            {'Sell'}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CurrencyPairRowItem;
