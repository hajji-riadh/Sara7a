const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ChatApp</h1>
        <p className="text-gray-600 mb-8">
          Connect with friends and colleagues in real-time. Experience seamless communication
          with our modern chat application.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </a>
          <a
            href="/register"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;