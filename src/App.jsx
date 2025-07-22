import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomaPage from "./pages/HomePage";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<HomaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
