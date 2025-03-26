import React, { useState } from 'react'
import { calcularIdade, validarData } from '../utils/calcularIdade'
import Formulario from './Formulario'
import Resultado from './Resultado'

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

  return (
    <div className="calculadora-idade">
      <Formulario
        dia={dia} setDia={setDia}
        mes={mes} setMes={setMes}
        ano={ano} setAno={setAno}
        erros={erros}
        aoEnviar={aoEnviar}
      />
      <Resultado idade={idade} chaveResultado={chaveResultado} />
    </div>
  )
}

export default CalculadoraDeIdade
