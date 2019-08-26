import React, {
  createContext,
  useEffect,
  useCallback,
  useState,
  useContext,
} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { LightTheme, DarkTheme } from '../shared/theme'

const DEFAULT_DARK_MODE_CONTEXT_VALUE = { darkMode: false, toggle: () => {} }

const DarkModeContext = createContext(DEFAULT_DARK_MODE_CONTEXT_VALUE)
export const useDarkModeContext = () => useContext(DarkModeContext)

const useLocalStoragetDarkMode = () => {
  const [mode, setMode] = useState(false)
  useEffect(() => {
    const lsMode = !!localStorage.getItem('darkMode')
    setMode(lsMode)
  }, [])

  return [mode, setMode]
}

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStoragetDarkMode()

  const toggle = useCallback(() => {
    const dark = !darkMode
    localStorage.setItem('darkMode', dark)
    setDarkMode(dark)
    console.log(dark)
  }, [darkMode, setDarkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      <MuiThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        {children}
      </MuiThemeProvider>
    </DarkModeContext.Provider>
  )
}