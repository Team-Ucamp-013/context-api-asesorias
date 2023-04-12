import React, { useContext} from 'react'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Boton from './components/boton'
import UsuariosProvider, { UsuariosContext } from './context/UsuariosContext'
import ThemeProvider from './context/ThemeContext'



const App = () => {
 

  return (
    <div>
    <UsuariosProvider>
    <ThemeProvider >
    <Page1 />
    <Page2 />
    </ThemeProvider>
    <Boton />
    </UsuariosProvider>
    </div>
  )
}

export default App
