import React from 'react';
import classNames from 'classnames';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './../static/sass/app.css';
import CurrencyPairRowItemContainer from './currencyPairRowItemContainer';
import Spinner from './spinner';

class CurrencyPairsList extends React.Component {
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
    const cpList = currencyPairs.map((cp, i) => (
      <CurrencyPairRowItemContainer
        key={cp.id}
        currencyPair={cp}
      />
      )
    )

    return (
      <Grid className="currencyPairs">
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
        {cpList}
      </Grid>
    );
  }
}

export default CurrencyPairsList;
