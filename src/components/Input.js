import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Button,
  Col,
  Row,
  Input as In
} from "reactstrap";

import { handleGuessWord } from "../slices/guessedWordsSlice";

export const Input = ({ success, handleGuessWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  // const [isValid, setIsValid] = useState(false);
  // const success = useSelector(state => state.success);

  const onSubmitGuessedWord = e => {
    e.preventDefault();
    handleGuessWord(currentGuess);
  };

  const handleIsValid = () => {
    return currentGuess.length === 5;
  };

  return (
    <div data-test="component-input">
      {success === false && (
        <Form inline>
          <FormGroup className="mr-2 mb-2">
            <Label for="guessed-word" className="mr-sm-2">
              Next Word:
            </Label>
            <In
              data-test="input-box"
              type="search"
              id="guessed-word"
              name="guessed-word"
              placeholder="five letter guess"
              bsSize="md"
              value={currentGuess}
              onChange={e => setCurrentGuess(e.target.value)}
              invalid={!handleIsValid()}
              valid={handleIsValid()}
            />
          </FormGroup>
          <Button
            data-test="submit-button"
            onClick={onSubmitGuessedWord}
            type="submit"
            color="primary"
            className="mt-sm-0 mt-3 mb-2"
          >
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  success: state.success
});

export default connect(mapStateToProps, { handleGuessWord })(Input);
