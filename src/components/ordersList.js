import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './../static/sass/app.css';
import OrderRowItem from './orderRowItem';

class OrdersList extends React.Component {
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

export default OrdersList;
