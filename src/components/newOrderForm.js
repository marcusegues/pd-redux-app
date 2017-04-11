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

  handleSubmitOrder() {
    const { ccyPair, submitOrder, type } = this.props
    const order = JSON.stringify({
      investmentCcy: type === BUY ? ccyPair.ccy1 : ccyPair.ccy2,
      buy: type === BUY,
      counterCcy: type === BUY ? ccyPair.ccy2 : ccyPair.ccy1,
      limit: this.state.limit,
      validUntil: this.state.validUntil,
    });
    submitOrder(order);
  }

  render() {
    const { id } = this.props;

    return (
      <div>
        <Form horizontal>
          <FormGroup controlId={`Limit${id}`}>
            <Col componentClass={ControlLabel} sm={2}>
              Limit
            </Col>
            <Col sm={10}>
              <FormControl
                type="number"
                step="0.0001"
                value={this.state.limit}
                onChange={this.handleLimitChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId={`ValidUntil${id}`}>
            <Col componentClass={ControlLabel} sm={2}>
              Valid Until
            </Col>
            <Col sm={10}>
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
                className="pull-right"
                bsSize="xsmall"
                bsStyle={'primary'}
                onClick={this.handleSubmitOrder}
              >
                {'Submit Order'}
              </Button>
              <Button
                className="pull-right"
                bsSize="xsmall"
                bsStyle={'danger'}
              >
                {'Cancel'}
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default NewOrderForm;
