import './App.css'

function App() {


  return (
    <>
      <div className="max-w-xs mx-auto my-8 border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Grilled Chicken Salad"
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Grilled Chicken Salad</h2>
          <p className="text-gray-600">
            A healthy and delicious salad with grilled chicken, fresh greens, cherry tomatoes, and a light vinaigrette.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
