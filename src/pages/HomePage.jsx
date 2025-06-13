import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="/images/campus-life.jpg" 
                alt="Campus Life" 
                className="h-64 w-full object-cover md:h-full"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Welcome to Campus Club Finder
              </h1>
              <p className="text-gray-700 mb-6">
                Discover and join exciting student clubs at your university! 
                Campus Club Finder helps you explore diverse communities, 
                find your passion, and make the most of your college experience.
              </p>
              <Link 
                to="/clubs" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors inline-block"
              >
                Explore Clubs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;