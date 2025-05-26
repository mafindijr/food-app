import './App.css'
import Card from './components/card';
import MainLayout from './layout/foodlayout';
import SearchForm from './components/SearchForm';
import {useState} from 'react';


function App() {

  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  
  // Handle search query from SearchForm
  const handleSearch = (query) => {

    try {
      
    //fetch date from API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    fetch(url)
     .then(response => response.json())
      .then(data => {
        setMeals(data.meals || [])
      }).catch(error => console.error 
        ('Error fetching data', error))

    } catch(error) {
      console.error ('Error fetching meals', error)
    }
  };

  return (
    <MainLayout>

      <div className='p-4'>
           <div className="flex justify-center my-8">
           <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />
      </div>

             {meals.length === 0 && <p className='text-center text-gray-200 text-2xl py-8'>No meals found</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
             {meals.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
             ))}
          </div>
      </div>
       
    </MainLayout>
  )
}

export default App
