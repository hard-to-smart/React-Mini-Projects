import { useState } from 'react'
import GamePage from './GamePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from './StartPage'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage/>}/>  
      <Route path='/game' element={<GamePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
