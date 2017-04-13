import React from 'react';
import { Link } from 'react-router';
import { BUY, SELL } from './../constants/util';
import { Row, Col, Button } from 'react-bootstrap';

class OrderRowItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelOrder = this.handleCancelOrder.bind(this);
  }

  handleCancelOrder() {
    const { onCancelOrder, order } = this.props;
    onCancelOrder(order);
  }

  render() {
    const { order } = this.props;

    return (
      <Row className="show-grid data-row flex-container">
        <Col xs={2}>{order.buy ? BUY : SELL}</Col>
        <Col xs={2}>
          <Link
            to={`/currencies/${order.currencyId.toLowerCase()}`}
            activeStyle={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            {order.currencyId}
          </Link>
        </Col>
        <Col xs={3}>{order.limit}</Col>
        <Col xs={3}>{order.validUntil}</Col>
        <Col>
          <Button
            bsSize="xsmall"
            bsStyle={'danger'}
            onClick={this.handleCancelOrder}
          >
            {'Cancel'}
          </Button>
        </Col>
      </Row>
    )
  }
}

export default OrderRowItem;
