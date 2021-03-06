import React from 'react';
import { Col, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './../static/sass/app.css';
import moment from 'moment';
import { BUY } from './../constants/util';

class NewOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.initialPrice,
      validUntil: moment().format('YYYY-MM-DD'),
    }
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleValidUntilChange = this.handleValidUntilChange.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
    this.handleCloseNewOrderForm = this.handleCloseNewOrderForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // only update the input field with a new initial price if the type of order changed
    if (this.props.type !== nextProps.type) {
      this.setState({
        limit: nextProps.initialPrice,
      })
    }
  }

  handleLimitChange(e) {
    this.setState({
      limit: e.target.value
    });
  }

  handleValidUntilChange(e) {
    this.setState({
      validUntil: moment(e.target.value).format('YYYY-MM-DD')
    });
  }

  handleCloseNewOrderForm() {
    this.props.handleCloseNewOrderForm();
  }

  handleSubmitOrder() {
    const { ccyPair, submitOrder, type, id } = this.props
    const order = {
      investmentCcy: type === BUY ? ccyPair.ccy1 : ccyPair.ccy2,
      buy: type === BUY,
      counterCcy: type === BUY ? ccyPair.ccy2 : ccyPair.ccy1,
      limit: this.state.limit,
      validUntil: this.state.validUntil,
    };
    submitOrder(order, id);
    this.props.handleCloseNewOrderForm();
  }

  render() {
    const { id, type } = this.props;

    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col xs={12} sm={8} smOffset={4} className="newOrderForm">
              <FormGroup controlId="NewOrderTitle">
                <Col xs={12} className="newOrderTitle">
                  {`${type === BUY ? "Buy" : "Sell"} ${id}`}
                </Col>
              </FormGroup>
              <FormGroup controlId={`Limit${id}`}>
                <Col componentClass={ControlLabel} xs={3} sm={2}>
                  Limit
                </Col>
                <Col xs={9} sm={10}>
                  <FormControl
                    type="number"
                    step="0.0001"
                    value={this.state.limit}
                    onChange={this.handleLimitChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId={`ValidUntil${id}`}>
                <Col componentClass={ControlLabel} xs={3} sm={2}>
                  Valid Until
                </Col>
                <Col xs={9} sm={10}>
                  <FormControl
                    type="date"
                    value={this.state.validUntil}
                    onChange={this.handleValidUntilChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button
                    className="pull-right submitOrderButton"
                    bsSize="xsmall"
                    bsStyle={'primary'}
                    onClick={this.handleSubmitOrder}
                  >
                    {'Submit Order'}
                  </Button>
                  <Button
                    className="pull-right cancelOrderButton"
                    bsSize="xsmall"
                    bsStyle={'danger'}
                    onClick={this.handleCloseNewOrderForm}
                  >
                    {'Cancel'}
                  </Button>
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default NewOrderForm;
