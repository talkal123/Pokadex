
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import PokemonById from './pages/PokemonById'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:id" element={<PokemonById />}/>
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
