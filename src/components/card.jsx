

export default function Card ({meal}) {

    return (
       // <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-xs  border border-gray-700 rounded-xl shadow-md overflow-hidden bg-gray-800">
          <img
            src={meal.strMealThumb}
            alt="Grilled Chicken Salad"
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">{meal.strMeal}</h2>
            <p className="text-gray-300">
              {meal.strInstructions?.slice(0, 100)}
            </p>
          </div>
        </div>
 //     </div>
    );
}