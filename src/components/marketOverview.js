import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CurrencyPairsListContainer from './currencyPairsListContainer';
import OrdersListContainer from './ordersListContainer';
import './../static/sass/app.css';

const MarketOverview = () => {
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

export default MarketOverview;
