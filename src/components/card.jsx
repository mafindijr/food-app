

export default function Card () {

    return (
       // <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-xs border border-gray-700 rounded-xl shadow-md overflow-hidden bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
            alt="Grilled Chicken Salad"
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">Grilled Chicken Salad</h2>
            <p className="text-gray-300">
              A healthy and delicious salad with grilled chicken, fresh greens, cherry tomatoes, and a light vinaigrette.
            </p>
          </div>
        </div>
 //     </div>
    );
}