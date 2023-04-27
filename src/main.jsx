import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'

const darkTheme = createTheme({
  type: 'dark'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider theme={darkTheme}>
    <App />
  </NextUIProvider>
)
