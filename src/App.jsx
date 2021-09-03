import React, { useState } from "react";
import dayjs from "dayjs";
import CoolClock from "./components/coolClock";
import "./App.css";
import useInterval from "./hooks/useInterval";

const App = () => {
  const [date, setDate] = useState(dayjs());
  // Increments the date each second
  useInterval(() => {
    setDate(dayjs(date).add(1, "s"));
  });
  return <CoolClock date={date} />;
};

export default App;
