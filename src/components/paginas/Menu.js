import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

import Platillo from "../ui/Platillo";

const Menu = () => {
  //definir  el state de los platillo
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  //consultar la bd al cargar..
  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection("productos").onSnapshot(handleSnapshot);
    };
    obtenerPlatillos();
  }, []);

  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function handleSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarPlatillos(platillos);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className=" bg-blue-700 hover:bg-blue-800 ml-3, inline-block mb-5 p-2 text-white uppercase font-bold rounded-md"
      >
        Agregar Platillo
      </Link>

      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};

export default Menu;
