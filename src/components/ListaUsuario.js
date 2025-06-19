import React, { useEffect, useState } from "react";
import axios from "axios";

export const ListaUsuario = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      const res = await axios.get("http://localhost:4000/api/usuario");

      setLista(res.data);
    };
    getUsuarios();

  }, [lista]);

  return (
    <div className="row">
      {lista.map((list) => (
        <div className="col-md-4 p-2" key={list.id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {list.nombre}</h5>
            </div>
            <div className="card-body">
              <p>Apellido: {list.apellido}</p>
              <p>Edad: {list.edad}</p>
              <p>Telefono: {list.telefono}</p>
              <p>Correo: {list.correo}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuario;
