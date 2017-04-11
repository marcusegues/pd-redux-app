import React from 'react';
import classNames from 'classnames';
import { Row, Col, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './../static/sass/app.css';

class NewOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.initialPrice,
      validUntil: new Date(),
    }
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleValidUntilChange = this.handleValidUntilChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      limit: nextProps.initialPrice,
    })
  }

  handleLimitChange(e) {
    this.setState({
      limit: e.target.value
    });
  }

  handleValidUntilChange(e) {
    this.setState({
      validUntil: e.target.value
    });
  }

  render() {
    const { submitOrder, cancelOrder, type, id } = this.props;

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
        </Form>
        <Button
          bsSize="xsmall"
          bsStyle={'primary'}
        >
          {'Buy'}
        </Button>
      </div>
    );
  }
}

export default NewOrderForm;
