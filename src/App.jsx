import './App.css'
import Card from './components/card';
import MainLayout from './layout/foodlayout';
import SearchForm from './components/SearchForm';


function App() {

  const meal = {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    title: "Meal 1",
  };

  // Handle search query from SearchForm
  const handleSearch = (query) => {
    // For now, just log the query. Replace with your search logic as needed.
    console.log('Search query:', query);
  };

  return (
    <MainLayout>
      <div className="flex justify-center my-8">
        <SearchForm onSubmit={handleSearch} />
      </div>
        <Card image={meal.image} title={meal.title} description="A healthy and delicious salad with grilled chicken, fresh greens, cherry tomatoes, and a light vinaigrette."/>

        <Card image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"  description="A healthy and delicious salad with grilled chicken, fresh greens, cherry tomatoes, and a light vinaigrette."/>
    </MainLayout>
  )
}

export default App
