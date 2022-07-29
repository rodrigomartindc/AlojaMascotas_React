import React from 'react'

function PanelTotal(props) {
  return (
    <div>
      <h2>Total de {props.nombre}</h2>
      <p> {props.cantidad}</p>
    </div>
  )
}

export default PanelTotal