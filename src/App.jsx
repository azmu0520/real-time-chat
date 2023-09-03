import { useState } from "react";
import Login from "./component/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Login />
    </section>
  );
}

export default App;
