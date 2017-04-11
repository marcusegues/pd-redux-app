import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './../static/sass/app.css';
import NewOrderFormContainer from './newOrderFormContainer';
import { BUY, SELL } from './../constants/util';

class CurrencyPairRowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newOrderType: null,
    }
    this.handleNewOrder = this.handleNewOrder.bind(this);
    this.handleCancelOrder = this.handleCancelOrder.bind(this);
  }

  handleNewOrder(e) {
    this.setState({
      newOrderType: e.target.dataset.type,
    });
  }

  handleCancelOrder() {
    this.setState({
      newOrderType: null,
    });
  }

  render() {
    const { id, bid, ask, ccyPair } = this.props.currencyPair;

    return (
      <Row className="show-grid cp-row flex-container-col">
        <Row className="show-grid cp-row flex-container">
          <Col xs={2}>{id}</Col>
          <Col xs={3}>{bid}</Col>
          <Col xs={3}>{ask}</Col>
          <Col xs={2}>
            <Button
              bsSize="xsmall"
              bsStyle={'primary'}
              data-type={BUY}
              onClick={this.handleNewOrder}
            >
              {'Buy'}
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              bsSize="xsmall"
              bsStyle={'primary'}
              data-type={SELL}
              onClick={this.handleNewOrder}
            >
              {'Sell'}
            </Button>
          </Col>
        </Row>
        {this.state.newOrderType ?
          <Row className="show-grid cp-row flex-container">
            <Col xs={6} xsOffset={6}>
              <NewOrderFormContainer
                id={id}
                ccyPair={ccyPair}
                type={this.state.newOrderType}
                initialPrice={this.state.newOrderType === BUY ? ask : bid}
                onCancelOrder={this.handleCancelOrder}
              />
            </Col>
          </Row> : null}
      </Row>
    );
  }
}

export default CurrencyPairRowItem;
