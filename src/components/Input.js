import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, FormGroup, Label, Button, Input as In } from "reactstrap";

class Input extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {!success && (
          <Form inline>
            <FormGroup className="mb-2 mx-sm-3">
              <Label for="guessed-word" className="mr-sm-2"></Label>
              <In
                data-test="input-box"
                type="search"
                id="guessed-word"
                name="guessed-word"
                placeholder="enter guess"
              />
              <Button data-test="submit-button" type="submit" color="primary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
