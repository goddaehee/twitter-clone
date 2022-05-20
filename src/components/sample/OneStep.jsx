import TwoStep from "./TwoStep";

const OneStep = ({ userName }) => {
  return (
    <div>
      <h1>1step : {userName}</h1>
      <TwoStep userName={userName} />
    </div>
  );
};

export default OneStep;
