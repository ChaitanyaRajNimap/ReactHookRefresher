import React, { useState } from "react";
import UseEffectOnce from "./UseEffectOnce";

//for clean up function see in UseEffectOnce component

function UseEffectCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffectOnce />}
    </div>
  );
}

export default UseEffectCleanup;
