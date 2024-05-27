import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="app">
        <h3>리액트 counter 앱 만들기</h3>
        count : {count} <button onClick={addCount}> + </button>
        <button onClick={minusCount}> - </button>
        <button onClick={resetCount} style={{ backgroundColor: "orange" }}>
          reset
        </button>
      </div>
    </>
  );
};

export default App;
