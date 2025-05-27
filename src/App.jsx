import './App.css'
import {Route, Routes} from 'react-router-dom'
import Ingradients from './views/Ingradients'
import Home from './views/home'


function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingradients />} />
    </Routes>
  )
}

export default App
