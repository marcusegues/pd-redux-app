import React from 'react';
import { BUY, SELL } from './../constants/util';
import { Row, Col } from 'react-bootstrap';

const OrderRowItem = ({ order }) => {
  return (
    <Row className="show-grid data-row flex-container">
      <Col xs={2}>{order.buy ? BUY : SELL}</Col>
      <Col xs={3}>{order.currencyId}</Col>
      <Col xs={3}>{order.limit}</Col>
      <Col xs={4}>{order.validUntil}</Col>
    </Row>
  )
}

export default OrderRowItem;
