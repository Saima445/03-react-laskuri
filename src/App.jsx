import { useState } from "react";

const Display = ({ counter }) => <section>{counter}</section>;

const Button = ({ handleClick, text }) => (
  // <section>
  <button onClick={handleClick}>{text}</button>
  // </section>
);

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before:", counter);
    setCounter(counter + 1);
  };

  const decreasByOne = () => {
    console.log("decreasing, value before:", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before:", counter);
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreasByOne} text="minus" />
    </>
  );
};

export default App;
