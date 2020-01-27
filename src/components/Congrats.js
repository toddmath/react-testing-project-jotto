import React from "react";
import PropTypes from "prop-types";

import { Alert } from "reactstrap";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop isn't passed)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <Alert color="success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </Alert>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
