import React from "react";
import { connect } from "react-redux";

import { Form, FormGroup, Label, Button, Input as In } from "reactstrap";

const Input = ({ success }) => {
  // render() {
  // const { success } = props;
  const content = success === false && (
    <Form inline>
      <FormGroup className="mb-4 mt-4 mx-sm-3">
        <Label for="guessed-word" className="mr-sm-2">
          Next Word:
        </Label>
        <In
          data-test="input-box"
          type="search"
          id="guessed-word"
          name="guessed-word"
          placeholder="enter guess"
          bsSize="md"
        />
        <Button data-test="submit-button" type="submit" color="primary">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );

  return <div data-test="component-input">{content}</div>;
  // }
};

const mapStateToProps = state => ({
  success: state.success
});

export default connect(mapStateToProps)(Input);
