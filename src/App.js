import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

import Ordenes from "./components/paginas/Ordenes";
import OrdenesPasadas from "./components/paginas/OrdenesPasadas";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import ActualizarPlatillo from "./components/paginas/ActualizarPlatillo";

import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div className="md:flex min-h-screen">
        <Sidebar />

        <div className="md:w-2/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ordenes-pasadas" element={<OrdenesPasadas />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
            <Route
              path="/actualizar-platillo"
              element={<ActualizarPlatillo />}
            />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
