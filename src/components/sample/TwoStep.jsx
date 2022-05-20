import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const TwoStep = ({ userName }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>2step : {userName}</h2>
      {theme.background} / {theme.foreground}
    </div>
  );
};

export default TwoStep;
