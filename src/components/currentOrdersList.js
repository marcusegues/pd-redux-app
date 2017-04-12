import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './../static/sass/app.css';
import CurrencyPairRowItemContainer from './currencyPairRowItemContainer';
import OrderRowItem from './orderRowItem';
import Spinner from './spinner';

class CurrentOrdersList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { orders } = this.props;
    const orderList = orders.map(order =>
      <OrderRowItem
        key={order.id}
        order={order}
      />
    )

    return (
      <Grid>
        <Row className="show-grid header-row flex-container">
          <Col xs={3}>
            Type
          </Col>
          <Col xs={3}>
            FX
          </Col>
          <Col xs={3}>
            Limit
          </Col>
          <Col xs={3}>
            Valid Until
          </Col>
        </Row>
        {orderList}
      </Grid>
    );
  }
}

export default CurrentOrdersList;
