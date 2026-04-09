const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>
        <p className="text-lg text-gray-600">
          A production-ready React template built with modern technologies and best practices.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🚀 What is this?</h2>
          <p className="text-gray-600 leading-relaxed">
            This project is a scalable React starter template using Redux Toolkit,
            React Query, Tailwind CSS, and modern routing patterns. It is designed
            to help developers build real-world applications faster.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">⚡ Key Features</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Feature-based architecture</li>
            <li>✅ API caching with React Query</li>
            <li>✅ Global state with Redux Toolkit</li>
            <li>✅ Tailwind CSS modern UI</li>
            <li>✅ Protected routes & layouts</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">💡 Why this project?</h2>
        <p className="text-gray-600 leading-relaxed">
          Instead of starting from scratch every time, this template provides a clean,
          scalable foundation that follows industry standards. It helps developers
          focus more on building features rather than setting up the project.
        </p>
      </div>

    </div>
  );
};

export default About;
