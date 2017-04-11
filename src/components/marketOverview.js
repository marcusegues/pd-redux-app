import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import CurrencyPairRowItemContainer from './currencyPairRowItemContainer';
import './../static/sass/app.css';
import { Spinner } from './spinner';

class MarketOverview extends React.Component {
  constructor(props) {
    super(props)
    this.handleFetchCurrencyPairs = this.handleFetchCurrencyPairs.bind(this);
  }

  componentDidMount() {
    this.handleFetchCurrencyPairs();
  }

  handleFetchCurrencyPairs() {
    this.props.fetchCurrencyPairs(this.props.lastReceivedId);
  }

  render() {
    const { currencyPairs, isFetching } = this.props;
    const currencyPairsList = currencyPairs.map((cp, i) => (
      <CurrencyPairRowItemContainer
        key={cp.id}
        currencyPair={cp}
      />
      )
    )

    return (
      <Grid>
        <Row className="show-grid header-row flex-container">
          <Col xs={6}>
            {isFetching ? <Spinner message={"Fetching data..."} /> : null}
          </Col>
          <Col xs={6}>
            <Button
              className="pull-right"
              bsStyle={'primary'}
              onClick={this.handleFetchCurrencyPairs}
              disabled={this.props.isFetching ? true : false}
            >
              {'Refresh data'}
            </Button>
          </Col>
        </Row>
        {currencyPairsList}
      </Grid>
    )
  }
}

export default MarketOverview;
