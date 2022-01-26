import React from 'react'
import logo from './logo.svg'
import './App.css'
import { GlobalStyles } from './components/globalStyles/globalStyles'
import LandingPage from './container/landingPage'

function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
    </>
  )
}

export default App
