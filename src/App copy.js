import { useState } from "react";
import "./bby.css";

function App() {
  const [isChange, updateChange] = useState(false);
  return (
    <div className="App">
      <h1>{!isChange ? "안녕~! 2023" : "리액트드르와"}</h1>
      {
        !isChange &&
        <button onClick={() => { updateChange(!isChange) }}>클릭</button>
      }
    </div>
  );
}

export default App;
