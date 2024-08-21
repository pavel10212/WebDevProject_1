import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pt-10 min-h-screen bg-gradient-to-tr from-red-700 to-red-400">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to your personal car overview website.
        </h1>
        <p className="text-xl pt-10 text-slate-50">Your personal car market analyst.</p>
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
