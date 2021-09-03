import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import CoolHand from "../coolHand";
import CoolColon from "../coolColon";
import "./index.css";

/**
 * A CoolClock component that will render a clock that takes the whole screen. The clock has
 * CoolHand component in form of columns that indicate the current time in the middle of the screen.
 * @param {any} date - The initial date. The clock will start at this date.
 */
const CoolClock = ({ date }) => {
  const time = dayjs(date).format("HHmmss");
  const now = Array.from(time);
  return (
    <div className="cool-clock">
      <CoolHand number={now[0]} min={0} max={2} />
      <CoolHand number={now[1]} min={0} max={9} />
      <CoolColon />
      <CoolHand number={now[2]} min={0} max={5} />
      <CoolHand number={now[3]} min={0} max={9} />
      <CoolColon />
      <CoolHand number={now[4]} min={0} max={5} />
      <CoolHand number={now[5]} min={0} max={9} />
    </div>
  );
};

CoolClock.propTypes = {
  date: PropTypes.shape({}).isRequired,
};

export default CoolClock;
