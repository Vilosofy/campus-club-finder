import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { clubs } from '../data/clubs';
import useLocalStorage from '../hooks/useLocalStorage';

function ClubDetailPage() {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [joinedClubs, setJoinedClubs] = useLocalStorage('joinedClubs', []);
  const [hasJoined, setHasJoined] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  useEffect(() => {
    const foundClub = clubs.find(c => c.id === clubId);
    setClub(foundClub);
    
    if (joinedClubs.includes(clubId)) {
      setHasJoined(true);
    }
  }, [clubId, joinedClubs]);
  
  const handleJoinClub = () => {
    if (!hasJoined) {
      setJoinedClubs([...joinedClubs, clubId]);
      setHasJoined(true);
      setShowConfirmation(true);
      
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  };
  
  if (!club) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl">Club not found</p>
        <Link to="/clubs" className="text-blue-500 hover:underline mt-4 inline-block">
          Back to Clubs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {showConfirmation && (
        <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50">
          You have successfully joined {club.name}!
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 md:h-96 w-full">
          <img 
            src={club.image} 
            alt={club.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">{club.name}</h1>
          
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {club.description}
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Upcoming Events</h2>
            <div className="space-y-3">
              {club.events.map((event, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded">
                  <div className="bg-blue-100 text-blue-800 p-2 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {hasJoined ? (
            <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
              You have joined this club!
            </div>
          ) : (
            <button
              onClick={handleJoinClub}
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Join Club
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClubDetailPage;