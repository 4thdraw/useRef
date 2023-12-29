import { useState } from "react";
import "./bby.css";

function App() {
  const [bgc, bgchange] = useState(false);

  return (
    <div className={` App ${!bgc ? "blackmode" : "whitemode"}`} >
      <button onClick={() => { bgchange(!bgc) }}>
        {/* {!bgc ? "black" : "white"} */}
      </button>
    </div>
  );
}

export default App;
