import React, { useEffect, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Ingradients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/list.php?i=list`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch ingredients');
        return res.json();
      })
      .then(data => {
        setIngredients(data.meals || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching ingredients');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingredients.map((ingredient, idx) => (
          <div
            key={ingredient.idIngredient || idx}
            className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
              alt={ingredient.strIngredient}
              className="w-20 h-20 object-contain mb-2"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <h4 className="text-lg font-semibold text-white mb-1">{ingredient.strIngredient}</h4>
            <p className="text-gray-300 text-sm text-center">{ingredient.strDescription?.slice(0, 80) || ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
