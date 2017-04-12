import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './../static/sass/app.css';
import OrderRowItem from './orderRowItem';
import Spinner from './spinner';
import { OVERVIEW } from './../constants/routes';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetchOrders = this.handleFetchOrders.bind(this);
  }

  componentDidMount() {
    console.log("Orders List Mounted");
    this.handleFetchOrders();
  }

  componentWillUnmount() {
    console.log("Orders List Unmounting");
  }

  handleFetchOrders() {
    this.props.fetchOrders();
  }

  render() {
    const { orders, isFetching, path } = this.props;
    const orderList = orders.map(order =>
      <OrderRowItem
        key={order.id}
        order={order}
      />
    )

    return (
      <Grid>
        <Row className="show-grid status-row flex-container">
          <Col xs={6}>
            {isFetching ? <Spinner message={"Retrieving orders..."} /> : null}
          </Col>
          <Col xs={6}>
            <Button
              className="pull-right"
              bsStyle={'primary'}
              onClick={this.handleFetchOrders}
              disabled={this.props.isFetching ? true : false}
            >
              {'Refresh Orders'}
            </Button>
          </Col>
        </Row>
        <Row className="show-grid header-row flex-container">
          <Col xs={12}>{path === OVERVIEW ? "Outstanding Valid Orders" : "All Orders"}</Col>
        </Row>
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
