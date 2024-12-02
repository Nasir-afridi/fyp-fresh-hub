import { useState } from "react";
import AppRoutes from "./app-routes.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
