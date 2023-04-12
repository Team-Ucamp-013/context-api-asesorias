import React, { createContext } from 'react'

 export const ThemeContext = createContext('light')

const ThemeProvider = (props) => {
    const {children, theme} = props

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
