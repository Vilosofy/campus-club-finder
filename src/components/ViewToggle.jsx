function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setViewMode('grid')}
        className={`px-3 py-1 rounded ${
          viewMode === 'grid'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Grid
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`px-3 py-1 rounded ${
          viewMode === 'list'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        List
      </button>
    </div>
  );
}

export default ViewToggle;