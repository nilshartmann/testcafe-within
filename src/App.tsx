import React from "react";
import "./App.css";

function App() {
  const [b, setB] = React.useState(1000);

  return (
    <div className="App">
      <div role="group" aria-labelledby="group-title" id="group-1">
        <div id="group-title">My Group</div>
        <button onClick={() => setB(b + 1)}>Increase B</button>
        <div>{b}</div>
      </div>
    </div>
  );
}

export default App;
