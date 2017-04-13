import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CurrencyPairsListContainer from './currencyPairsListContainer';
import OrdersListContainer from './ordersListContainer';
import './../static/sass/app.css';

class MarketOverview extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetchOrders = this.handleFetchOrders.bind(this);
    this.handleFetchCurrencyPairs = this.handleFetchCurrencyPairs.bind(this);
  }

  componentDidMount() {
    this.handleFetchCurrencyPairs().then(this.handleFetchOrders());
  }

  handleFetchOrders() {
    return this.props.fetchOrders();
  }

  handleFetchCurrencyPairs() {
    console.log(this.props);
    return this.props.fetchCurrencyPairs();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6}>
            <CurrencyPairsListContainer />
          </Col>
          <Col xs={12} sm={6}>
            <OrdersListContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MarketOverview;
