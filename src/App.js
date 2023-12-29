import { useEffect, useRef } from "react";
import "./bby.css";

function App() {
  // userefvar 변수를  useRef 변수로 만들어주기
  // 추후 랜더링 변수등장으로 초기화될 것을 막기위해 일반변수를  useRef 변수로 만들어주기

  const userefvar = useRef(false); // current속성에 저장된다. 객체변수
  // useRef 변수의 사용자변수값은 내부의 current라는 속성에 저장됨

  const bgchange = () => {
    if (userefvar.current) {
      document.querySelector(".App").classList = "App blackmode";
    } else {
      document.querySelector(".App").classList = "App whitemode";
    }
    userefvar.current = !userefvar.current //대입으로 변경한다.
  }
  useEffect(() => {
    bgchange()
  }, [])
  return (
    <div className="App " >
      <button onClick={bgchange}>

      </button>
    </div>
  );
}
export default App;