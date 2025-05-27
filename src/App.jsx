import './App.css'
import Home from './views/Home'
import Ingradients from './views/Ingradients'


function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingradients />} />
    </Routes>
  )
}

export default App
