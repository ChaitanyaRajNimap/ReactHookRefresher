import React, { useState } from "react";

function UseState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>Count - {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Incremnet by Hook</button> */}

      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incremenet
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Incremenet 5</button>
    </div>
  );
}

export default UseState;
