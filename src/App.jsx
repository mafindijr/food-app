import './App.css'
import {Route, Routes} from 'react-router-dom'
import Ingredients from './views/Ingredients'
import Home from './views/home'


function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingredients />} />
    </Routes>
  )
}

export default App
