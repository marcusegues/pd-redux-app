import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CurrencyPairsListContainer from './currencyPairsListContainer';
import CurrentOrdersListContainer from './currentOrdersListContainer';
import './../static/sass/app.css';
import { Spinner } from './spinner';

const MarketOverview = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6}>
          <CurrencyPairsListContainer />
        </Col>
        <Col xs={6}>
          <CurrentOrdersListContainer />
        </Col>
      </Row>
    </Grid>
  );
}

export default MarketOverview;
