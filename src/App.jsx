import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("clicked");
  // };

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => console.log("clicked")}>plus</button>
    </>
  );
};

export default App;
