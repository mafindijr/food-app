

export default function Card ({children}) {

    return (
       // <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-xs  border border-gray-700 rounded-xl shadow-md overflow-hidden bg-gray-800">
          {children}
        </div>
 //     </div>
    );
}