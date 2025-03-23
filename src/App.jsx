import React, { useState } from 'react'
import {
  calcularIdade,
  validarData
} from './components/calcularIdade.js'
import './App.css'

function CalculadoraDeIdade() {
  const [dia, setDia] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')
  const [idade, setIdade] = useState({ anos: '--', meses: '--', dias: '--' })
  const [erros, setErros] = useState({ dia: '', mes: '', ano: '' })
  const [chaveResultado, setChaveResultado] = useState(0)

  const aoEnviar = (e) => {
    e.preventDefault()
    const { valido, erros } = validarData(dia, mes, ano)

    if (valido) {
      const resultado = calcularIdade(parseInt(dia), parseInt(mes), parseInt(ano))
      setIdade(resultado)
      setErros({ dia: '', mes: '', ano: '' })
      setChaveResultado(prev => prev + 1)
    } else {
      setErros(erros)
      setIdade({ anos: '--', meses: '--', dias: '--' })
    }
  }

  const aoDigitar = (setador) => (e) => {
    const valor = e.target.value.replace(/\D/g, '')
    setador(valor)
  }

  const aoColar = (e, setador) => {
    e.preventDefault()
    const colado = e.clipboardData.getData('Text').replace(/\D/g, '')
    setador(colado)
  }

  return (
    <div className="calculadora-idade">
      <form onSubmit={aoEnviar}>
        <div className="entradas">
          <div>
            <label>DIA</label>
            <input
              type="text"
              value={dia}
              onChange={aoDigitar(setDia)}
              onPaste={(e) => aoColar(e, setDia)}
              placeholder="DD"
              maxLength="2"
            />
            <div className={`container-erro ${erros.dia ? 'animar' : ''}`}>
              <p className="erro">{erros.dia.split('\n').map((linha, i) => <span key={i}>{linha}<br /></span>)}</p>
            </div>
          </div>

          <div>
            <label>MÊS</label>
            <input
              type="text"
              value={mes}
              onChange={aoDigitar(setMes)}
              onPaste={(e) => aoColar(e, setMes)}
              placeholder="MM"
              maxLength="2"
            />
            <div className={`container-erro ${erros.mes ? 'animar' : ''}`}>
              <p className="erro">{erros.mes}</p>
            </div>
          </div>

          <div>
            <label>ANO</label>
            <input
              type="text"
              value={ano}
              onChange={aoDigitar(setAno)}
              onPaste={(e) => aoColar(e, setAno)}
              placeholder="AAAA"
              maxLength="4"
            />
            <div className={`container-erro ${erros.ano ? 'animar' : ''}`}>
              <p className="erro">{erros.ano}</p>
            </div>
          </div>
        </div>

        <div className="divisor">
          <button type="submit" className="botao-enviar">↓</button>
        </div>
      </form>

      <div className="resultados" key={chaveResultado}>
        <p className="linha-resultado animar"><span>{idade.anos}</span> anos</p>
        <p className="linha-resultado animar"><span>{idade.meses}</span> meses</p>
        <p className="linha-resultado animar"><span>{idade.dias}</span> dias</p>
      </div>
    </div>
  )
}

export default CalculadoraDeIdade
