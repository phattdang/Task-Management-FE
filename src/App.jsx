import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [str, setStr] = useState("");

  const sayHello = () => {
    fetch("https://task-management-be-1-ey1a.onrender.com/sayHello")
      .then((res) => res.json())
      .then((res) => setStr(res));
  };

  console.log(str);

  return (
    <>
      <p>Hello</p>
      <button onClick={sayHello}>Say hello</button>
    </>
  );
}

export default App;
