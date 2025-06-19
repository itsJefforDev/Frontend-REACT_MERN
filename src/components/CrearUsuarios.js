import { useState } from "react";

const CrearUsuarios = () => {
  //logic here

  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: 0,
    telefono: 0,
    correo: "",
  };

  const [usuario, setUsuario] = useState(valorInicial);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    console.log(usuario);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center mb-1">Crear usuario</h2>
          <div className="mb-3">
            <label className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu nombre"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Ingresa tu apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Ingresa tu edad"
              required
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Telefono
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Ingresa tu telefono"
              required
              name="telefono"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Ingresa tu correo"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>

          <button className="btn btn-primary form-control">
            Guardar usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuarios;
