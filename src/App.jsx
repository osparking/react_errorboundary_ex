import { useState } from "react";
import "./App.css";
import Suspecious from "./components/Sussecious";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Suspecious />
      </div>
    </>
  );
}

export default App;
