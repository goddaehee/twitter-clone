import React, { useState } from "react";

const CounterSample1 = ({ initialCount }) => {
  const initial = initialCount ? initialCount : 0;
  const [count, setCount] = useState(initial);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(initial)}>초기화</button>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setCount((count) => count - 1)}>감소</button>
    </>
  );
};

export default CounterSample1;
