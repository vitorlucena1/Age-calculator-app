import React from 'react'

function Campo({ label, valor, setValor, erro, placeholder, maxLength }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value.replace(/\D/g, ''))}
        onPaste={(e) => {
          e.preventDefault()
          const textoColado = e.clipboardData.getData('Text').replace(/\D/g, '')
          const textoLimitado = textoColado.slice(0, maxLength)
          setValor(textoLimitado)
        }}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className={`container-erro ${erro ? 'animar' : ''}`}>
        <p className="erro">
          {erro.split('\n').map((linha, i) => (
            <span key={i}>{linha}<br /></span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Campo
