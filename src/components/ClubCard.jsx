import { Link } from 'react-router-dom';

function ClubCard({ club, viewMode }) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden 
                    ${viewMode === 'grid' ? 'h-full' : 'flex flex-col md:flex-row'}`}>
      <div className={viewMode === 'grid' ? 'h-48' : 'h-48 md:h-auto md:w-1/3'}>
        <img 
          src={club.image} 
          alt={club.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-blue-600 mb-2">{club.name}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{club.shortDescription}</p>
        <Link 
          to={`/clubs/${club.id}`} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ClubCard;