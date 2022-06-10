import React from "react";

const NuevoPlatillo = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl ">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre Platillo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                id="precio"
                type="number"
                placeholder="S/. 20 "
                min="0 "
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categoria"
              >
                Categoría
              </label>
              <select
                className="block text-gray-700 text-sm font-bold mb-2"
                id="precio"
                name="categoria"
              >
                <option value="">-- Seleccione --</option>
                <option value="desayuno">-- Desayuno --</option>
                <option value="comida">-- Desayuno --</option>
                <option value="cena">-- Cena --</option>
                <option value="bebidas">-- Bebidas --</option>
                <option value="postre">-- Postre --</option>
                <option value="ensalada">-- Ensalada --</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imagen"
              >
                Imagen
              </label>
              <input
                id="imagen"
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Descripcion
              </label>
              <textarea
                id="descripcion"
                type="text"
                placeholder="Descripción del platillo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              ></textarea>
            </div>

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold rounded-md"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlatillo;
