import { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeContext'

export default function useTheme() {
  const { appTheme, deviceTheme, theme, toggleTheme } = useContext(ThemeContext)
  return { theme, colors: appTheme, deviceTheme, toggleTheme }
}
