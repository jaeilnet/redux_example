import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCounter } from "./modules/counter/counter";

function App() {
  const [counter, setCounter] = useState(0);

  // 디스패치 훅 // 액션을 디스패치할 떄 씀
  const dispatch = useDispatch();

  // 셀렉터 훅 리덕스의 스테이트 값을 가져올 떄 씀, state.스토어명.리듀서명
  const counters = useSelector((state) => state.counter.counter);

  return (
    <>
      <div className="App">
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
        />
        {/* // 액션함수를 디스패치할 떄 씀, action.payload 값으로 입력한 카운터 숫자를 넘김*/}
        <button onClick={() => dispatch(addCounter(counter))}>버튼</button>
      </div>
      {/* // 리덕스에 있는 state 값을 가져와서 보여줌 */}
      <div className="counter">{counters ? counters : 0}</div>
    </>
  );
}

export default App;
