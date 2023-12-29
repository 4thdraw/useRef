import { useCallback, useEffect, useRef, useState } from "react";
import "./bby.css";

function App() {
  //일반 변수를  useRef 변수로 만들어주기
  const [num, updatnum] = useState(0);

  //랜더링과 상관없는 변수는 useRef 변수로, 함수 useCallback 으로 재호출 순간을 알려주면 끝
  let userefvar = false;
  const bgchange = useCallback(() => {
    if (userefvar) {
      document.querySelector(".App").classList = "App blackmode";
    } else {
      document.querySelector(".App").classList = "App whitemode";
    }
    userefvar = !userefvar
  }, [])

  useEffect(() => {
    bgchange()
  }, [])

  useEffect(() => {
    const autonum = setInterval(() => { updatnum(num + 1) }, 1000)
    return () => { clearInterval(autonum) }
  }, [num])
  return (
    <div className="App " >
      <p>{num}</p>
      <button onClick={bgchange}>

      </button>
    </div>
  );
}
export default App;
