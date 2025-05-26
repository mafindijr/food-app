import './App.css'
import Card from './components/card';
import MainLayout from './layout/foodlayout';
import SearchForm from './components/SearchForm';


function App() {


  // Handle search query from SearchForm
  const handleSearch = (query) => {
    const [search, setSearch] = useState('');

    console.log('Search query:', query);
  };

  return (
    <MainLayout>
      <div className="flex justify-center my-8">
        <SearchForm search={search} setSearch={setSearch} onSearch={handleSearch} />
      </div>
       
    </MainLayout>
  )
}

export default App
