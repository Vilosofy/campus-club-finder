function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">About Campus Club Finder</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">What is Campus Club Finder?</h2>
            <p>
              Campus Club Finder is a web application designed to help university students discover, 
              learn about, and join student clubs on campus. Our goal is to make it easier for students 
              to get involved in campus life and find communities that match their interests.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">How it Works</h2>
            <p>
              Browse through our collection of student clubs, view detailed information about each club, 
              including their description and upcoming events, and join the ones that interest you. 
              Your joined clubs are saved locally so you can keep track of them.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Technology Stack</h2>
            <p>This application was built using:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-medium">Vite</span> - For project setup and bundling</li>
              <li><span className="font-medium">React</span> - For building the user interface and managing state</li>
              <li><span className="font-medium">React Router</span> - For navigation between different pages</li>
              <li><span className="font-medium">Tailwind CSS</span> - For styling the application</li>
              <li><span className="font-medium">localStorage</span> - For persisting joined clubs data</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;