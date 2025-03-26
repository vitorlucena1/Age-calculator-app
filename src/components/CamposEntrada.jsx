import React from 'react'
import Campo from './Campo'

function CamposEntrada({ dia, setDia, mes, setMes, ano, setAno, erros }) {
  return (
    <div className="entradas">
      <Campo label="DIA" valor={dia} setValor={setDia} erro={erros.dia} placeholder="DD" maxLength={2} />
      <Campo label="MÊS" valor={mes} setValor={setMes} erro={erros.mes} placeholder="MM" maxLength={2} />
      <Campo label="ANO" valor={ano} setValor={setAno} erro={erros.ano} placeholder="AAAA" maxLength={4} />
    </div>
  )
}

export default CamposEntrada
