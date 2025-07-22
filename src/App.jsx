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
      <button className="border border-gray-300 shadow-md bg-white px-2 py-1 rounded-sm transition-transform hover:scale-110" onClick={sayHello}>Say hello</button>
    </>
  );
}

export default App;
