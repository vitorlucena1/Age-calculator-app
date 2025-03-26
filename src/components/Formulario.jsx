import React from 'react'
import CamposEntrada from './CamposEntrada'
import BotaoEnviar from './BotaoEnviar'

function Formulario({ dia, setDia, mes, setMes, ano, setAno, erros, aoEnviar }) {
  return (
    <form onSubmit={aoEnviar}>
      <CamposEntrada
        dia={dia} setDia={setDia}
        mes={mes} setMes={setMes}
        ano={ano} setAno={setAno}
        erros={erros}
      />
      <div className="divisor">
        <BotaoEnviar />
      </div>
    </form>
  )
}

export default Formulario
