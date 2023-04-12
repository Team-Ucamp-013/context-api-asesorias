import React, { createContext, useState } from 'react'

export const UsuariosContext = createContext();

const datosAnteriores = {
    artista:"Morat",
    integrantes: 4
  }

 const UsuariosProvider = ({children}) => {
    const [data, setData] = useState(datosAnteriores)

  return (
    <div>
      <UsuariosContext.Provider value ={{data, setData}}>
        {children}
      </UsuariosContext.Provider>
    </div>
  )
}

export default UsuariosProvider
