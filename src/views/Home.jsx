import Card from '../components/card';
import MainLayout from '../layout/foodlayout';
import SearchForm from '../components/SearchForm';
import LoadingIndicator from '../components/LoadingIndicator';
import {useState, useEffect} from 'react';



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Home() {

  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState('Explore Meals');

  // Fetch six random meals on mount
  const fetchRandomMeals = async () => {
    try {
      setError('');
      setLoading(true);
      const requests = Array.from({ length: 6 }, () =>
        fetch(`${API_BASE_URL}/random.php`).then(res => res.json())
      );
      const results = await Promise.all(requests);
      // Flatten and filter out any nulls
      const randomMeals = results
        .map(r => r.meals && r.meals[0])
        .filter(Boolean);
      setMeals(randomMeals);
    } catch (error) {
      setError('Error fetching random meals');
      console.error('Error fetching random meals', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);
  
  // Handle search query from SearchForm
  const handleSearch = (query) => {


    if (!query) {
      setHeading('Explore Meals')
      fetchRandomMeals();
      return
    }

    try {
      setError('');
      setLoading(true);
    //fetch date from API
    const url = `${API_BASE_URL}/search.php?s=${query}`
    fetch(url)
     .then(response => response.json())
      .then(data => {
        setHeading(`Search result for "${query}"`)
        setMeals(data.meals || [])
      })
      .catch(error => {
        setError('Error fetching data');
        console.error 
        ('Error fetching data', error);
      })
      .finally(() => {
        setLoading(false);
      });

    } catch(error) {
      setError('Error fetching meals');
      setLoading(false);
      console.error ('Error fetching meals', error)
    }
  };

  return (
    <MainLayout>

      <div className='p-4'>
           <div className="flex justify-center my-8 text-gray-100">
           <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />
      </div>
        <h2 className='text-2xl font-bold mb-4'>{heading}</h2>
      {error && (
          <p className='text-center text-red-500 text-xl py-4'>{error}</p>
        )}
        {loading && <LoadingIndicator />}
             {!loading && meals.length === 0 && !error && <p className='text-center text-gray-200 text-2xl py-8'>No meals found</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
             {!loading && meals.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
             ))}
          </div>
      </div>
       
    </MainLayout>
  )
}
