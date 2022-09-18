import React, { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value);

    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.table(datos.nombre + " " + datos.apellido + " " + datos.email);
    event.target.reset();
  };

  return (
    <div>
      <formcontainer className="formcontainer">
        <form onSubmit={enviarDatos}>
          <p>
            <label for name="nombre">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              onChange={handleInputChange}
              id="formulario"
              placeholder="Ingresa tu nombre"
            />
          </p>
          <br />
          <p>
            <label for name="apellido">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              onChange={handleInputChange}
              id="formulario"
              placeholder="Ingresa tu apellido"
            />
          </p>
          <br />
          <p>
            <label for name="email">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              id="formulario"
              placeholder="Ingresa tu E-Mail"
            />
          </p>
          <br />
          <p>
            <button className="btn1" type="submit">
              Enviar
            </button>
          </p>
        </form>
      </formcontainer>
    </div>
  );
};

export default Formulario;
