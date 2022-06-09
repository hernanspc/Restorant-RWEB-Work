import "./App.css";
import { Routes, Route } from "react-router";

import Ordenes from "./components/pages/Ordenes";
import Menu from "./components/pages/Menu";
import NuevoPlatillo from "./components/pages/NuevoPlatillo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
      </Routes>
    </div>
  );
}

export default App;
