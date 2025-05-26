import './App.css'
import Card from './components/card';
import MainLayout from './layout/foodlayout';
import SearchForm from './components/SearchForm';
import {useState} from 'react';


function App() {

  const [search, setSearch] = useState('');
  
  // Handle search query from SearchForm
  const handleSearch = (query) => {

    //fetch date from API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    fetch(url)
     .then(response => response.json())
      .then(data => {
        console.log(data);
      }).catch(error => console.error 
        ('Error fetching data', error))
  };

  return (
    <MainLayout>
      <div className="flex justify-center my-8">
        <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />
      </div>
       
    </MainLayout>
  )
}

export default App
