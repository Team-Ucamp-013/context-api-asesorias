import React, { useContext } from 'react'
import { UsuariosContext } from '../context/UsuariosContext'
import { ThemeContext } from '../context/ThemeContext'
import './styles.css'

const Page1 = () => {
    const {data} = useContext(UsuariosContext)
    const theme = useContext(ThemeContext)
  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Pagina 1</h1>
      <br/>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default Page1
