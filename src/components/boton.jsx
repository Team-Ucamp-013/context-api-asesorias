import React, { useContext } from 'react'
import { UsuariosContext } from '../context/UsuariosContext'

const data = {
    artista: "Black Pink",
    integrantes: 8
}

const Boton = () => {
    const {setData} = useContext(UsuariosContext)
  return (
    <div>
      <button onClick={()=> setData(data)}>Enviar</button>
    </div>
  )
}

export default Boton
