import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const isDisable = count === 0;
  const handleIncrement = () => {
    // neat practice
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleDecrement} disabled={isDisable}>
        Decrement
      </button>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Counter;
