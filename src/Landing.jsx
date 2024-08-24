import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-red-700 to-red-400">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-extrabold mb-6 text-white leading-tight">
          Welcome to Your Personal Car Overview Website
        </h1>
        <p className="text-lg text-slate-100 mb-10">
          Your personal car market analyst.
        </p>
        <Link
          to="dashboard"
          className="bg-white text-red-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-800 hover:text-white transition duration-300"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Landing;