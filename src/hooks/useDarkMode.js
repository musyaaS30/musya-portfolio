import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme')

    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.classList.add('dark-mode')
    } else {
      setIsDarkMode(false)
      document.body.classList.remove('dark-mode')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev
      if (newValue) {
        document.body.classList.add('dark-mode')
        sessionStorage.setItem('theme', 'dark')
      } else {
        document.body.classList.remove('dark-mode')
        sessionStorage.setItem('theme', 'light')
      }
      return newValue
    })
  }

  return { isDarkMode, toggleDarkMode }
}
