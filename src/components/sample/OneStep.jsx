import React from "react";
import TwoStep from "./TwoStep";

const OneStep = (props) => {
  return (
    <div>
      <h1>1step : {props.userName}</h1>
      <TwoStep userName={props}></TwoStep>
    </div>
  );
};

export default OneStep;
