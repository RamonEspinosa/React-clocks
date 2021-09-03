import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import range from "../../utils/range";

const POSITION_HEIGHT = 4;
const getInitialPosition = (positions, direction) => {
  const { length } = positions;
  if (length === 3) return 4 * direction;
  if (length === 6) return 10 * direction;
  return 18 * direction;
};

/**
 * A react component which will display a column of numbers for the cool clock.
 * @param {number} number - The current number the hand is pointing to.
 * @param {number} min - The minimum number in this hand.
 * @param {number} max - The maximum number in this hand.
 * @param {boolean} inverted - Sort the numbers the other way.
 */
const CoolHand = ({ number, min, max, inverted }) => {
  const direction = inverted ? -1 : 1;
  const numberRange = inverted ? [max, min, direction] : [min, max, direction];
  const positions = range(...numberRange);
  const initialPosition = getInitialPosition(positions, direction);
  return (
    <div
      className="cool-hand"
      style={{
        transform: `translateY(${
          initialPosition - number * POSITION_HEIGHT * direction
        }rem)`,
      }}
    >
      {positions.map((position) => (
        <span className="cool-hand__position" key={position}>
          {position}
        </span>
      ))}
    </div>
  );
};

CoolHand.defaultProps = {
  inverted: false,
};

CoolHand.propTypes = {
  number: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  inverted: PropTypes.bool,
};

export default CoolHand;
