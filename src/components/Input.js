import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Button, Input as In } from "reactstrap";

import { handleGuessWord } from "../slices/guessedWordsSlice";

export const Input = ({ success, handleGuessWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const onSubmitGuessedWord = e => {
    e.preventDefault();
    handleGuessWord(currentGuess);
  };

  return (
    <div data-test="component-input">
      {success === false && (
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
              value={currentGuess}
              onChange={e => setCurrentGuess(e.target.value)}
            />
            <Button
              data-test="submit-button"
              onClick={onSubmitGuessedWord}
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  success: state.success
});

export default connect(mapStateToProps, { handleGuessWord })(Input);
