import React from 'react'

function Resultado({ idade, chaveResultado }) {
  return (
    <div className="resultados" key={chaveResultado}>
      <p className="linha-resultado animar"><span>{idade.anos}</span> anos</p>
      <p className="linha-resultado animar"><span>{idade.meses}</span> meses</p>
      <p className="linha-resultado animar"><span>{idade.dias}</span> dias</p>
    </div>
  )
}

export default Resultado
