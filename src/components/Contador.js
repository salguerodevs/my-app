import React, { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  const aumentar = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <h1 className="number"> A {numero} personas les gusta esta pagina</h1>
      <button onClick={aumentar}>ME GUSTA</button>
    </div>
  );
};

export default Contador;
