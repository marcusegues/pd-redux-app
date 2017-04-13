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
    this.handleFetchCurrencyPairs = this.handleFetchCurrencyPairs.bind(this);
  }

  componentDidMount() {
    const { currencyPairsFetched, path } = this.props;
    console.log("Orders list did mount")
    if (path !== OVERVIEW) {
      if (!currencyPairsFetched) {
        this.handleFetchCurrencyPairs().then(this.handleFetchOrders());
      } else {
        console.log("now about to fetch more orders")
        this.handleFetchOrders();
      }
    }
  }

  componentWillUnmount() {
    console.log("Orders List Will Unmount");
  }

  handleFetchOrders() {
    return this.props.fetchOrders();
  }

  handleFetchCurrencyPairs() {
    return this.props.fetchCurrencyPairs();
  }

  render() {
    const { orders, isFetching, title } = this.props;
    var obj = {};
    var arr = [];
    orders.forEach(o => {
      if (!obj[o.id]) {
        obj[o.id] = true;
      } else {
        arr.push(o)
      }
    });
    console.log("orders", orders)
    console.log("duplicates", arr)
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
        <Row className="show-grid data-row header-row flex-container">
          <Col xs={12}>{title}</Col>
        </Row>
        <Row className="show-grid data-row header-row flex-container">
          <Col xs={2}>
            Type
          </Col>
          <Col xs={3}>
            FX
          </Col>
          <Col xs={3}>
            Limit
          </Col>
          <Col xs={4}>
            Valid Until
          </Col>
        </Row>
        {orderList}
      </Grid>
    );
  }
}

export default OrdersList;
