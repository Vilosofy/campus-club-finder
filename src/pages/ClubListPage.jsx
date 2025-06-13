import { useState } from 'react';
import { clubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';
import ViewToggle from '../components/ViewToggle';

function ClubListPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortOrder, setSortOrder] = useState('asc');
  
  const sortedClubs = [...clubs].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Campus Clubs</h1>
      
      <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-700">Sort by:</label>
          <select 
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="asc">Name A-Z</option>
            <option value="desc">Name Z-A</option>
          </select>
        </div>
        
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-6'
      }>
        {sortedClubs.map(club => (
          <ClubCard key={club.id} club={club} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}

export default ClubListPage;