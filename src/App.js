import Kornavi from './child/First'
import Ennavi from './child/Snd'
import { Route, Routes, Link } from 'react-router-dom';
import Dd from "./Dd"

import "./bby.css";


function App() {


  return (
    <div className="App " >
      <h2>라우터로 UI변경하기</h2>
      <div>
        <Link to="/">한국어</Link>
        <Link to="/en">English</Link>
      </div>
      <Routes>
        <Route path='/' element={<Kornavi />}></Route>
        <Route path='/en' element={<Ennavi />}></Route>
      </Routes>
      <p>//////////////////////////////</p>
      <h2>props로 UI변경하기</h2>
      <Dd></Dd>


    </div>
  );
}
export default App;