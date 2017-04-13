import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './../static/sass/app.css';
import CurrencyPairRowItemContainer from './currencyPairRowItemContainer';
import Spinner from './spinner';

class CurrencyPairsList extends React.Component {
  constructor(props) {
    super(props)
    this.handleFetchCurrencyPairs = this.handleFetchCurrencyPairs.bind(this);
  }

  handleFetchCurrencyPairs() {
    this.props.fetchCurrencyPairs();
  }

  render() {
    const { currencyPairs, isFetching } = this.props;
    const cpList = currencyPairs.map((cp, i) => (
      <CurrencyPairRowItemContainer
        key={cp.id}
        currencyPair={cp}
      />
      )
    )

    return (
      <Grid className="currencyPairs">
        <Row className="show-grid status-row flex-container">
          <Col xs={6}>
            {isFetching ? <Spinner message={"Fetching exchange rates..."} /> : null}
          </Col>
          <Col xs={6}>
            <Button
              className="pull-right"
              bsStyle={'primary'}
              onClick={this.handleFetchCurrencyPairs}
              disabled={this.props.isFetching ? true : false}
            >
              {'Refresh Exchange Rates'}
            </Button>
          </Col>
        </Row>
        <Row className="show-grid data-row header-row flex-container">
          <Col xs={12}>{"Exchange Rates"}</Col>
        </Row>
        <Row className="show-grid data-row header-row flex-container">
          <Col xs={2}>{"FX"}</Col>
          <Col xs={3} className="bidColumn">{"Bid"}</Col>
          <Col xs={3}>{"Ask"}</Col>
          <Col xs={2}>

          </Col>
          <Col xs={2}>

          </Col>
        </Row>
        {cpList}
      </Grid>
    );
  }
}

export default CurrencyPairsList;
