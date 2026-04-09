const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Scalable React Apps 🚀
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Production-ready setup with Redux, React Query, Tailwind and Routing.
        </p>

        <div className="flex gap-4">
          <a
            href="/dashboard"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Go to Dashboard
          </a>

          <a
            href="/about"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">⚡ Fast Setup</h3>
          <p className="text-gray-600">
            Powered by Vite for lightning-fast development experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🧠 State Management</h3>
          <p className="text-gray-600">
            Redux Toolkit + React Query for scalable data handling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🎨 Modern UI</h3>
          <p className="text-gray-600">
            Tailwind CSS for clean, responsive and customizable design.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Home;