

export default function Card ({image, title="Unknown meals", description}) {

    return (
       // <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-xs m-4 border border-gray-700 rounded-xl shadow-md overflow-hidden bg-gray-800">
          <img
            src={image}
            alt="Grilled Chicken Salad"
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
            <p className="text-gray-300">
              {description}
            </p>
          </div>
        </div>
 //     </div>
    );
}